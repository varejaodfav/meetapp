/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Requisição de login
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

// Sucesso no Login
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

// Requisição de cadastro
export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

// Falha no Login/Cadastro
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

// Sair da aplicação
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
