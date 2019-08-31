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
import {useSelector} from 'react-redux';

// Rotas
import createRouter from '~/routes';

export default function MobileApp() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
