/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import produce from 'immer';

// Estado inicial do estado
const INITIAL_STATE = {
  subscription: null,
  canceled: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subscriptions/SUBSCRIPTION_SUCCESS': {
        draft.subscription = action.payload.meetup;
        draft.canceled = false;
        break;
      }
      case '@subscriptions/CANCEL_REQUEST': {
        draft.canceled = true;
        break;
      }
      case '@subscriptions/SUBSCRIPTION_FAILURE': {
        draft.canceled = false;
        break;
      }
      default:
    }
  });
}
