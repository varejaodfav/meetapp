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
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

// Assets
import logo from '~/assets/images/M.svg';

// Redux actions
import { signUpRequest } from '~/store/modules/auth/actions';

// Validação de campos com Yup
const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, '"Nome completo" deve conter ao menos 5 caracteres')
    .required('"Nome completo" é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido para cadastro')
    .required('"E-mail" é obrigatório'),
  password: Yup.string()
    .min(6, '"Sua senha secreta" deve conter ao menos 6 caracteres')
    .required('"Sua senha secreta" é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  // Funções
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
