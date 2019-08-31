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
import { utcToZonedTime } from 'date-fns-tz';
import { isBefore, parseISO } from 'date-fns';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// Serviços
import api from '~/services/api';
import history from '~/services/history';

// Utilitários
import { formatDate } from '~/util/format';

// Redux actions
import {
  meetupRequestFailure,
  meetupDetailsSuccess,
  updateMeetupSuccess,
} from './actions';

// Cria um novo meetup
export function* createMeetup({ payload }) {
  const { title, description, date, location, banner_id } = payload.data;

  const past = isBefore(date, new Date());

  // Verifica se o usuário está tentando criar meetup com data passada
  if (past) {
    toast.error('Não é possível criar meetups com datas que já passaram!');
    yield put(meetupRequestFailure());
    return;
  }

  // Faz a requisição de criação de um novo meetup para a API
  const response = yield call(api.post, 'meetups', {
    title,
    description,
    date,
    location,
    banner_id,
  });

  // Se erro na requisição à API, informe ao usuário
  if (!response.ok) {
    toast.error(
      'Todos os campos são obrigatórios. Por favor, verifique os dados inseridos'
    );
    yield put(meetupRequestFailure());
    return;
  }

  toast.success('Cadastro criado com sucesso!');
  history.push('/dashboard');
}

// Exibe os detalhes de um meetup específico
export function* meetupDetails({ payload }) {
  const { id } = payload;

  // Se nenhuma ID está contida, envie "null" para o estado
  if (!id) {
    yield put(meetupDetailsSuccess(null));
    return;
  }

  // Faz a requisição de detalhes de um meetup específico para a API
  const response = yield call(api.get, `meetups/organized/${id}`);

  // Se erro na resposta da API, informe ao usuário
  if (!response.ok) {
    toast.error('Falha ao carregar detalhes do meetup');
    yield put(meetupRequestFailure());
    return;
  }

  const { date, banner } = response.data;

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localtime = utcToZonedTime(date, timezone).toISOString();

  const details = {
    ...response.data,
    banner_url: banner.url,
    past: isBefore(parseISO(localtime), new Date()),
    formattedDate: formatDate(localtime),
  };

  yield put(meetupDetailsSuccess(details));
}

// Atualiza um meetup
export function* updateMeetup({ payload }) {
  const meetup = payload.data;

  // Faz a requisição de atualização de um meetup para a API
  const response = yield call(api.put, `/meetups/${meetup.id}`, meetup.data);

  // Se falha na requisição à API, informe ao usuário
  if (!response.ok) {
    toast.error(
      'Todos os campos são obrigatórios. Por favor, verifique os dados inseridos'
    );
    yield put(meetupRequestFailure());
    return;
  }
  toast.success('Meetup atualizado com sucesso');
  yield put(updateMeetupSuccess(response.data));
  history.push('/dashboard');
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/MEETUP_DETAILS_REQUEST', meetupDetails),
]);
