/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import sagaPlugin from 'reactotron-redux-saga';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'MeetApp Mobile',
    host: '192.168.1.7',
  })
    .useReactNative()
    .use(reactotronRedux()) // <- Plugin do Redux
    .use(sagaPlugin()) // <- Plugin do Saga
    .connect();

  tron.clear();

  console.tron = tron;
}
