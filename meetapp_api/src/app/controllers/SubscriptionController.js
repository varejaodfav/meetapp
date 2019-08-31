// Módulos
import { Op } from 'sequelize';
import { isBefore } from 'date-fns';

// Modelos
import File from '../models/File';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

// Helpers
import Queue from '../../lib/Queue';

// Jobs
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  /*
    Lista meetups em que o usuário logado está inscrito e os organiza por data
    ascendente
   */
  async index(req, res) {
    const subscription = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          attributes: [
            'id',
            'title',
            'location',
            'description',
            'date',
            'banner_id',
          ],
          include: [
            {
              model: File,
              as: 'banner',
              attributes: ['name', 'path', 'url'],
            },
            {
              model: User,
              as: 'organizer',
              attributes: ['name', 'email'],
            },
          ],
          order: [['date', 'ASC']],
        },
      ],
    });

    // Se não retornar nenhum resultado informe ao usuário
    if (!subscription.length) {
      return res.status(204).json();
    }

    return res.json(subscription);
  }

  async store(req, res) {
    const user = User.findByPk(req.userId, {
      attributes: ['name', 'email'],
    });

    const meetup = await Meetup.findByPk(req.params.id, {
      attributes: ['title', 'description', 'date'],
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    // Se o meetup não existir retorne erro
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    // Procura por conflito de data/horário em meetups inscritos do usuário logado
    const timeConflict = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    // Verifica se o usuário não está tentando se inscrever em dois meetups na mesma hora
    if (timeConflict) {
      return res.status(400).json({
        error: "You can't subscribe to two meetups with the same date and time",
      });
    }

    // Verifica se usuário já está inscrito...
    const isSubscribed = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.params.id,
      },
    });

    // ...e retorna erro se verdadeiro
    if (isSubscribed) {
      return res
        .status(400)
        .json({ error: 'You are already subscribed to this meetup' });
    }

    // Se a data já passou retorne erro
    if (isBefore(meetup.date, new Date())) {
      return res.status(400).json({ error: 'This meetup has already ended' });
    }

    // Sucesso: Inscreve usuário logado ao meetup
    await Subscription.create({
      user_id: req.userId,
      meetup_id: req.params.id,
    });

    // Sucesso: Envia e-mail ao organizador do meetup
    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json({
      success: 'You are now subscribed to:',
      meetup,
    });
  }

  async delete(req, res) {
    const meetup = await Subscription.findByPk(req.params.id, {
      attributes: ['id', 'user_id'],
    });

    // Se não encontrar nenhum meetup retorne erro
    if (!meetup) {
      return res.status(400).json({
        error: 'Meetup not found',
      });
    }

    // Se o meetup não pertece ao usuário logado retorne erro
    if (meetup.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You cannot cancel meetups subscriptions from others users',
      });
    }

    // Sucesso: Deleta o meetup do banco de dados
    await Subscription.destroy({
      where: {
        id: meetup.id,
      },
    });

    return res.json({
      success: 'Subscription cancelled',
      meetup,
    });
  }
}

export default new SubscriptionController();
