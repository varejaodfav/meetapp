/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */
import 'dotenv/config';

export default {
  secret: process.env.APP_SECRET,
  expireIn: process.env.AUTH_EXPIRES,
};
