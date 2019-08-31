/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Modelos
import File from '../models/File';
import Meetup from '../models/Meetup';

class OrganizerController {
  async index(req, res) {
    /*
      Pesquisa meetups que pertencem ao usuário logado e retorna suas
      informações ordenadas por data descendente
     */
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
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
      ],
      order: [['date', 'DESC']],
    });

    // Se não retornar nenhum resultado informe ao usuário
    if (!meetups.length) {
      return res.status(204).json();
    }

    return res.json(meetups);
  }

  /*
    Lista um meetup especifico
  */
  async show(req, res) {
    const meetup = await Meetup.findByPk(req.params.id, {
      where: { user_id: req.userId },
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(meetup);
  }
}

export default new OrganizerController();
