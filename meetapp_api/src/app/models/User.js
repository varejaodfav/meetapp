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
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isLowercase: true, // Só aceita letras minúsculas
            isEmail: true, // Deve ser um email "foo@bar.com"
            notNull: true, // Não pode receber "null"
            notEmpty: true, // Não pode estar vazio
          },
          set(email) {
            this.setDataValue('email', email.toLowerCase());
          },
        },
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Senha de verificação
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 12);
      }
    });
    return this;
  }

  // Verifica se a senha inserida e a cadastrada no BD são compatíveis
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
