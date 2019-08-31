/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

// Serviços
import api from '~/services/api';

// Redux actions
import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  const {name, email, ...rest} = payload.data;

  const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };

  const response = yield call(api.put, 'users', profile);

  if (!response.ok) {
    Alert.alert('Falha ao atualizar perfil', `"${response.data.error}"`);
    yield put(updateProfileFailure());
    return;
  }
  Alert.alert('Sucesso', 'Seu perfil foi atualizado com sucesso!');
  yield put(updateProfileSuccess(response.data));
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
