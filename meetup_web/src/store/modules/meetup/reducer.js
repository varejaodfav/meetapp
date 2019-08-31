/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import produce from 'immer';

// Estado inicial
const INITIAL_STATE = {
  details: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.details = action.payload.data;
        break;
      }
      case '@meetup/MEETUP_DETAILS_SUCCESS': {
        draft.details = action.payload;
        break;
      }
      default:
    }
  });
}
