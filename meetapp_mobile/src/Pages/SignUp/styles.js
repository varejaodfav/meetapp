// Modulos
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

  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  height: 50px;

  margin-bottom: 10px;

  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.6);

  font-size: 16px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 41px;
  height: 42px;
`;
