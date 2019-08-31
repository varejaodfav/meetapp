/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
        },
        canceled: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'organizer' });
  }
}

export default Meetup;
