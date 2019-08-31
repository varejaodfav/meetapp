/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import Reactotron from 'reactotron-react-js';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';

// Se em ambiente de desenvolvimento, debugar no Reactotron
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'MeetApp Web',
    environment: process.env.NODE_ENV,
  })
    .use(sagaPlugin()) // <- Reactotron Saga
    .use(apisaucePlugin()) // <- Reactotron API Sauce
    .use(reactotronRedux()) // <- Reactotron Redux
    .connect();

  tron.clear();

  console.tron = tron;
}
