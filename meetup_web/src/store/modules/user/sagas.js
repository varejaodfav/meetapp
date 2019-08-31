/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// Serviços
import api from '~/services/api';

// Redux actions
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };

  // Faz a requisição de atualização do perfil de usuário para a API
  const response = yield call(api.put, 'users', profile);

  // Se erro na requisição à API, avise ao usuário
  if (!response.ok) {
    toast.error('Falha ao atualizar perfil, verifique seus dados');
    yield put(updateProfileFailure());
    return;
  }
  toast.success('Perfil atualizado com sucesso');
  yield put(updateProfileSuccess(response.data));
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
