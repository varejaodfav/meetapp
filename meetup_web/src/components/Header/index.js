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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import logo from '~/assets/images/M.svg';

// Redux actions
import { signOut } from '~/store/modules/auth/actions';

// Estilos
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  // Funções
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
