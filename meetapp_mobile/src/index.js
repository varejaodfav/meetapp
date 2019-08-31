/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

// Configuracoes
import '~/config/reactotron.cfg';

// Redux/Saga
import {store, persistor} from '~/store';

// Aplicacao
import MobileApp from '~/MobileApp';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#22202C" />
        <MobileApp />
      </PersistGate>
    </Provider>
  );
}
