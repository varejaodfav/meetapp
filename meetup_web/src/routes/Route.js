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
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Layouts
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

// Redux/Saga
import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  // Se usuario não logado e rota privada, redirecione para o 'login'
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se usuário logado e rota não privada, redirecione para o 'dashboard'
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // Se usuário logado use o "Default Layout", se não use o "Auth Layout"
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// Validação das props
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
