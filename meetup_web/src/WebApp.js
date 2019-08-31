/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Configurações
import '~/config/reactotron.cfg';

// Rotas
import Routes from '~/routes';

// Serviços
import history from '~/services/history';

// Redux/Saga
import { store, persistor } from '~/store';

// Estilos globais
import GlobalStyle from '~/styles/global';

function WebApp() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default WebApp;
