/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

// Modelos
import User from '../models/User';

// Configs
import authConfig from '../../config/auth.cfg';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('E-mail is required')
        .email('Invalid e-Mail'),
      password: Yup.string().required('Password is required'),
    });

    // -- Falha na validação
    if (!(await schema.isValid(req.body))) {
      try {
        await schema.validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({
          error: error.errors,
        });
      }
    }
    // -! Recebendo informações de login
    const { email, password } = req.body;

    // -! Verificando se usuário existe
    const user = await User.findOne({
      where: { email },
    });

    // -- Falha na verificação do usuário
    if (!user) {
      return res.status(401).json({
        error: 'User not found',
      });
    }

    // -- Falha na verificação da senha
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        error: 'Wrong password',
      });
    }

    const { name, id } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

export default new SessionController();
