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
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { updateProfileRequest } from '~/store/modules/user/actions';

// Estilos
import { Container } from './styles';

// Validação de campos com Yup
const schema = Yup.object().shape({
  name: Yup.string().min(5, 'Nome deve conter ao menos 5 caracteres'),
  email: Yup.string().email('E-mail inválido'),
  password: Yup.string(),
  oldPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('Senha atual é necessária para alteração desse campo')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Você precisa confirmar a senha')
          .oneOf([Yup.ref('password')], 'Senhas não conferem')
          .min(6, 'Sua senha deve conter ao menos 6 caracteres')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  // Funções
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} />
            <span>Salvar perfil</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
