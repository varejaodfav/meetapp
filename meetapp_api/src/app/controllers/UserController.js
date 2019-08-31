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

// Modelos
import User from '../models/User';

class UserController {
  // Cadastro de novos usuários ###########
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(5, 'Name must contain at least 5 characters'),
      email: Yup.string()
        .email('Invalid e-Mail')
        .required('E-mail is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must contain at least 6 characters'),
    });

    // Falha na validação
    if (!(await schema.isValid(req.body))) {
      try {
        await schema.validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({
          error: error.errors,
        });
      }
    }

    // Verifica se já existe e-mail
    const checkEmail = await User.findOne({
      where: { email: req.body.email.toLowerCase() },
    });

    if (checkEmail) {
      return res.status(400).json({
        mensagem: 'E-mail already in use',
      });
    }

    // Armazenando informações no banco de dados
    await User.create(req.body);

    // Sucesso
    return res.status(200).json({
      success: 'User was added to database',
    });
  }

  // Atualização de usuários já existentes #############
  async update(req, res) {
    // Validação dos campos
    const schema = Yup.object().shape({
      name: Yup.string().min(5, 'Name must contain at least 5 characters'),
      email: Yup.string().email('Invalid e-Mail'),
      password: Yup.string()
        .min(6, 'Password must contain at least 6 characters')
        .when('password_hash', (password_hash, field) =>
          password_hash
            ? field.required('Old password is required to change this field')
            : field
        ),
      oldPassword: Yup.string().when('password', (password, field) =>
        password
          ? field.required('Old password is required to change this field')
          : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field
              .required('You need to confirm the new password')
              .oneOf([Yup.ref('password')], 'Passwords do not match')
          : field
      ),
    });

    // Falha na validação dos dados
    if (!(await schema.isValid(req.body))) {
      try {
        await schema.validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({
          error: error.errors,
        });
      }
    }

    // Campos que serão validados
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // ID não encontrada
    if (!user) {
      return res.status(400).json({
        error: 'Invalid session',
      });
    }

    if (email && email !== user.email) {
      const checkEmail = await User.findOne({
        where: { email: req.body.email.toLowerCase() },
      });

      if (checkEmail) {
        return res.status(400).json({
          error: 'E-mail already in use',
        });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({
        error: 'Wrong old password',
      });
    }

    // Sucesso na atualização dos dados
    const { name } = await user.update(req.body);

    return res.json({
      name,
      email,
    });
  }
}

export default new UserController();
