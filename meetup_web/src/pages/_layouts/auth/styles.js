/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { darken } from 'polished';
import { headShake } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Animação
const headShakeAnimation = keyframes`${headShake}`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background: linear-gradient(#22202c, #402845);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;

  text-align: center;

  form {
    display: flex;
    flex-direction: column;

    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);

      border: 0;
      border-radius: 4px;

      height: 50px;

      font-size: 18px;
      font-family: Helvetica, sans-serif;

      padding: 0 15px;
      margin: 0 0 10px;

      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    span {
      align-self: center;

      color: #ff8080;

      font-family: Helvetica;

      margin: 0 0 10px;

      animation: 1s ${headShakeAnimation};
    }
  }

  button {
    margin: 5px 0 0;

    height: 44px;

    font-size: 18px;
    font-weight: bold;

    border: 0;
    border-radius: 4px;

    color: #fff;
    background: #f94d6a;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }

  a {
    margin-top: 20px;

    font-size: 16px;
    font-weight: bold;

    color: #fff;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
