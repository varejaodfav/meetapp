/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function meetupDetailsRequest(id) {
  return {
    type: '@meetup/MEETUP_DETAILS_REQUEST',
    payload: { id },
  };
}

export function meetupDetailsSuccess(details) {
  return {
    type: '@meetup/MEETUP_DETAILS_SUCCESS',
    payload: details,
  };
}

export function meetupRequestFailure() {
  return {
    type: '@meetup/MEETUP_REQUEST_FAILURE',
  };
}

export function cancelMeetup(id) {
  return {
    type: '@meetup/CANCEL_MEETUP',
    payload: { id },
  };
}
