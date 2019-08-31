/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React from 'react';

// Assets
import logo from '~/assets/images/M.png';

// Estilos
import {Container, Image} from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
