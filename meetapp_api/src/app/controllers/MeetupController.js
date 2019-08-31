/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
  startOfHour,
  parseISO,
  isBefore,
  startOfDay,
  endOfDay,
} from 'date-fns';

// Modelos
import File from '../models/File';
import User from '../models/User';
import Meetup from '../models/Meetup';

class MeetupController {
  /*
   *  Lista todos os meetups criados
   */
  async index(req, res) {
    const where = {};
    const { page = 1, date } = req.query;

    if (date) {
      const findDate = parseISO(date);

      where.date = {
        [Op.between]: [startOfDay(findDate), endOfDay(findDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
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
      order: [['date', 'DESC']],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(meetups);
  }

  /*
    Criar novo meetup
  */
  async store(req, res) {
    // Validação dos dados de entrada
    const schema = Yup.object().shape({
      title: Yup.string()
        .typeError('Invalid title') // Retorna um erro customizado para string()
        .required('Title is required'),
      location: Yup.string()
        .typeError('Invalid location')
        .required('Location is required'),
      description: Yup.string()
        .typeError('Invalid description')
        .required('Description is required'),
      date: Yup.date()
        .typeError('Invalid date')
        .required('A date is required'),
      banner_id: Yup.number()
        .typeError('Invalid banner')
        .required('You need to set a banner for this meetup'),
    });

    // Falha na validação
    if (!(await schema.isValid(req.body))) {
      try {
        await schema.validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({
          erro: error.errors,
        });
      }
    }

    const { date, title, location, description, banner_id } = req.body;

    // Se a data informada já passou retorne erro
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    // Sucesso: Armazena novo meetup no banco de dados
    const meetup = await Meetup.create({
      user_id: req.userId,
      title,
      location,
      description,
      date,
      banner_id,
    });

    return res.json(meetup);
  }

  /*
    Atualiza meetups do usuário logado que ainda não aconteceram
  */
  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().typeError('Invalid title'),
      location: Yup.string().typeError('Invalid location'),
      description: Yup.string().typeError('Invalid description'),
      date: Yup.date().typeError('Invalid date'),
      banner_id: Yup.number().typeError('Invalid banner'),
    });

    // Falha na validação
    if (!(await schema.isValid(req.body))) {
      try {
        await schema.validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({
          erro: error.errors,
        });
      }
    }

    const meetup = await Meetup.findByPk(req.params.id, {
      attributes: ['id', 'title', 'description', 'date', 'user_id'],
    });

    // Se não encontrar nenhum meetup retorne erro
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    // Se o meetup não pertece ao usuário logado retorne erro
    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You cannot edit meetups from others users' });
    }

    // Se a data do meetup já passou retorne erro
    if (isBefore(meetup.date, new Date())) {
      return res.status(400).json({ error: 'This meetup has already ended' });
    }

    // Se a data a ser atualizada já passou retorne erro
    const { date, banner_id } = req.body;

    if (date && isBefore(parseISO(date), new Date())) {
      return res
        .status(400)
        .json({ error: 'Cannot update this meetup with past dates' });
    }

    // Verifica se o banner informado existe
    if (banner_id) {
      const hasBanner = await File.findByPk(req.body.banner_id);

      // Se o banner não existe retorne erro
      if (!hasBanner) {
        return res.status(400).json({ error: 'Banner not found' });
      }
    }

    const { title, description, location } = await meetup.update(req.body);

    // Sucesso: Atualiza os dados do meetup
    return res.json({ title, description, date, location });
  }

  /*
    Deleta um meetup quando é cancelado pelo usuário que o criou
  */
  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id, {
      attributes: ['id', 'title', 'description', 'date', 'user_id'],
    });

    // Se não encontrar nenhum meetup retorne erro
    if (!meetup) {
      return res.status(400).json({
        error: 'Meetup not found',
      });
    }

    // Se o meetup não pertece ao usuário logado retorne erro
    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You cannot cancel meetups from others users' });
    }

    // Se a data informada já passou retorne erro
    if (isBefore(meetup.date, new Date())) {
      return res.status(400).json({ error: 'This meetup has already ended' });
    }

    // Sucesso: Deleta o meetup do banco de dados
    await Meetup.destroy({
      where: {
        id: meetup.id,
      },
    });

    return res.json({
      success: 'Meetup cancelled',
      meetup,
    });
  }
}

export default new MeetupController();
