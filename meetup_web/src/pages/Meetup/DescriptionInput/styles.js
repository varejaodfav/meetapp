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

  textarea {
    width: 100%;
    height: 200px;

    resize: none;

    background: rgba(0, 0, 0, 0.2);

    border: 0;
    border-radius: 4px;

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
