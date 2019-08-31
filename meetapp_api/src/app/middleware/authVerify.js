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
import { promisify } from 'util';

// Configs
import authConfig from '../../config/auth.cfg';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Token não fornecido
  if (!authHeader) {
    return res.status(401).json({
      error: 'Session not started',
    });
  }

  // Recuperando token do cabeçalho
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Armazenando ID do usuário logado
    req.userId = decoded.id;

    return next();
  } catch (err) {
    // Falha na verificação do token
    return res.status(401).json({
      error: 'Invalid token',
    });
  }
};
