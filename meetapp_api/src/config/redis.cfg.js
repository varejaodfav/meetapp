/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import 'dotenv/config';

export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
