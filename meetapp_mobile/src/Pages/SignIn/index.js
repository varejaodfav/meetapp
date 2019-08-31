/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import {signInRequest} from '~/store/modules/auth/actions';

// Assets
import logo from '~/assets/images/M.png';

// Estilos
import Background from '~/components/Background';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux store
  const loading = useSelector(state => state.auth.loading);

  // Referências
  const passwordRef = useRef();

  // Funções
  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar
        </SubmitButton>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratis</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

// Validacao das prop types
SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
