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
import { Switch } from 'react-router-dom';

import Route from './Route';

// Páginas de autenticação
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

// Páginas de Meetups
import Meetup from '~/pages/Meetup';
import Details from '~/pages/Details';
import Dashboard from '~/pages/Dashboard';

// Páginas do usuário
import Profile from '~/pages/Profile';

// Página de erro
import NotFound from '~/pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas de autenticação */}
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      {/* Rotas de meetups */}
      <Route path="/meetup" exact component={Meetup} isPrivate />
      <Route path="/details" exact component={Details} isPrivate />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      {/* Rotas do usuário */}
      <Route path="/profile" exact component={Profile} isPrivate />

      {/* Rotas inexistentes */}
      <Route path="/" component={NotFound} />
    </Switch>
  );
}
