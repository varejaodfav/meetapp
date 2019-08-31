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
import {subscriptionSuccess, subscriptionFailure} from './actions';

export function* subscribe({payload}) {
  const {id} = payload;
  const response = yield call(api.post, `meetups/subscription/${id}`);

  if (!response.ok) {
    Alert.alert(
      'Falha na conexão',
      `Não conseguimos te inscrever neste meetup: "${response.data.error}"`,
    );
    yield put(subscriptionFailure());
    return;
  }

  Alert.alert('Inscrito', 'Você agora está inscrito neste meetup');
  yield put(subscriptionSuccess(response.data));
}

export function* cancel({payload}) {
  const {id} = payload;
  const response = yield call(api.delete, `meetups/subscription/${id}`);

  if (!response.ok) {
    Alert.alert(
      'Oops, houve algum erro',
      `Não conseguimos cancelar sua inscrição neste meetup: "${response.data.error}"`,
    );
    yield put(subscriptionFailure());
    return;
  }

  Alert.alert('Sucesso', 'Sua inscrição neste meetup foi cancelada');
}

export default all([
  takeLatest('@subscriptions/SUBSCRIPTION_REQUEST', subscribe),
  takeLatest('@subscriptions/CANCEL_REQUEST', cancel),
]);
