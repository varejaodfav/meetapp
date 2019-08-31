/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux actions
import {signUpRequest} from '~/store/modules/auth/actions';

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

export default function SignUp({navigation}) {
  const dispatch = useDispatch();

  // Estados
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux store
  const loading = useSelector(state => state.auth.loading);

  // Referências
  const emailRef = useRef();
  const passwordRef = useRef();

  // Funções
  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
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
          Criar conta
        </SubmitButton>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

// Validação das prop types
SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
