/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Requisição de atualização de perfil
export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

// Sucesso na atualização do perfil
export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

// Falha na atualização do perfil
export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
