/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Requisição de meetups
export function subscriptionRequest(id) {
  return {
    type: '@subscriptions/SUBSCRIPTION_REQUEST',
    payload: {id},
  };
}

// Meetups carregados
export function subscriptionSuccess(subscription) {
  return {
    type: '@subscriptions/SUBSCRIPTION_SUCCESS',
    payload: {subscription},
  };
}

// Requisição de cancelamento
export function cancelSubscription(id) {
  return {
    type: '@subscriptions/CANCEL_REQUEST',
    payload: {id},
  };
}

// Erro na requisição
export function subscriptionFailure() {
  return {
    type: '@subscriptions/SUBSCRIPTION_FAILURE',
  };
}
