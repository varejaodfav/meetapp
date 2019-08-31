/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { all } from 'redux-saga/effects';

// Sagas
import auth from './auth/sagas';
import user from './user/sagas';
import meetup from './meetup/sagas';

export default function* rootSaga() {
  return yield all([auth, user, meetup]);
}
