/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'http://10.0.3.2:3333',
});

export default api;
