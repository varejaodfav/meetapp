/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// Funções
import createStore from './createStore';
import persistReducers from './persistReducers';

// Redux/Saga Root
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Se em ambiente de desenvolvimento, debugar no Reactotron
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
