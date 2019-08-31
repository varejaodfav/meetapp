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
import ScrollBar from 'react-perfect-scrollbar';
import styled, { keyframes } from 'styled-components';

// Animação
const headShakeAnimation = keyframes`${headShake}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    > input {
      width: 100%;

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

    hr {
      border: 0;
      height: 2px;

      margin: 20px 0 19px;

      opacity: 0.1;
      background: rgba(255, 255, 255, 0.1);
    }

    > button {
      align-self: flex-end;

      width: 162px;
      height: 42px;

      margin-top: 10px;

      padding: 5px;

      border: 0;
      border-radius: 4px;

      color: #fff;
      background: #f94d6a;

      font-size: 16px;
      font-weight: bold;
      font-family: Helvetica;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 10px;
        }

        span {
          margin-top: 5px;
        }
      }
    }
  }
`;

export const Scroll = styled(ScrollBar)`
  max-height: 500px;
  padding: 0 15px 0 0;

  > div {
    &.ps__rail-y {
      &:hover {
        background: none;
      }
    }
  }
`;
