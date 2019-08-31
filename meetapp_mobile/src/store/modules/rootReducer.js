/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {combineReducers} from 'redux';

// Reducers
import auth from './auth/reducer';
import user from './user/reducer';
import subscriptions from './subscriptions/reducer';

export default combineReducers({
  auth,
  user,
  subscriptions,
});
