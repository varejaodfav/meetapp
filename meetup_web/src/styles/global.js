/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { createGlobalStyle } from 'styled-components';

// Estilos externos
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 100%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    overflow: inherit;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Helvetica;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
