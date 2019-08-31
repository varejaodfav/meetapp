/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { headShake } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Animação
const headShakeAnimation = keyframes`${headShake}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    &.react-datepicker__month-container {
      background: rgba(0, 0, 0, 0.01);
    }

    &.react-datepicker__header {
      background: linear-gradient(#22202c, #402845);

      div {
        color: #fff;
      }
    }

    &.react-datepicker__time-container {
      div {
        &.react-datepicker__header {
          height: 60px;
        }

        ul {
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  input {
    width: 925px;
    height: 50px;

    background: rgba(0, 0, 0, 0.2);

    border: 0;
    border-radius: 4px;

    height: 50px;

    font-size: 18px;
    font-family: Helvetica, sans-serif;

    padding: 20px;
    margin: 0 0 10px;

    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  > span {
    align-self: center;

    color: #ff8080;

    font-family: Helvetica;

    margin: 0 0 10px;

    animation: 1s ${headShakeAnimation};
  }
`;
