/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import apisauce from 'apisauce';
import Reactotron from 'reactotron-react-js';

// Endereço da API
const api = apisauce.create({
  baseURL: 'http://localhost:3333',
  timeout: 60000,
});

// Se em ambiente de desenvolvimento, debugar no Reactotron
if (process.env.NODE_ENV === 'development') {
  api.addMonitor(Reactotron.apisauce);
}

export default api;
