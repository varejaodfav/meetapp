/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp-mobile',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
