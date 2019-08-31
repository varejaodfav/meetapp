/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {Platform} from 'react-native';
import styled from 'styled-components/native';

// Componentes
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: Platform.OS === 'ios' && {padding: 30},
})`
  align-self: stretch;
  margin-top: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 30px 0 19px;
`;

export const FormInput = styled(Input)`
  height: 50px;

  margin-bottom: 10px;

  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 14px;
`;

export const SignOutButton = styled(Button)`
  background: #d44059;

  margin-top: 14px;

  height: 42px;
`;
