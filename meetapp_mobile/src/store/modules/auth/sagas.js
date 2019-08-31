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
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  const {email, password} = payload;

  // Faz a requisição de abertura de sessão para a API
  const response = yield call(api.post, 'session', {
    email,
    password,
  });

  // Se erro na requisição à API, avise ao usuário
  if (!response.ok) {
    Alert.alert(
      'Falha no login',
      'Não conseguimos te autenticar! Por favor, verifique seus dados',
    );
    yield put(signFailure());
    return;
  }

  const {token, user} = response.data;

  // Armazenando o token do usuário no Header "Authorization"
  api.setHeader('Authorization', `Bearer ${token}`);

  yield put(signInSuccess(token, user));
}

export function* signUp({payload}) {
  const {name, email, password} = payload;

  const response = yield call(api.post, 'users', {
    name,
    email,
    password,
  });

  // Se erro na requisição à API, avise ao usuário
  if (!response.ok) {
    Alert.alert(
      'Falha no cadastro',
      'Não conseguimos te cadastrar! Por favor, verifique seus dados',
    );
    yield put(signFailure());
  }

  Alert.alert('Sucesso', 'Seu cadastro foi efetuado com sucesso');
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    // Armazenando o token do usuário no Header "Authorization"
    api.setHeader('Authorization', `Bearer ${token}`);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
