/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { signInRequest } from '~/store/modules/auth/actions';

// Assets
import logo from '~/assets/images/M.svg';

// Validação de campos com Yup
const schema = Yup.object().shape({
  email: Yup.string().required('"E-mail" é obrigatório'),
  password: Yup.string().required('"Sua senha secreta" é obrigatório'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  // Funções
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
