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
  align-self: center;

  margin-bottom: 30px;

  width: 100%;
  height: 300px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      height: 300px;

      background: rgba(0, 0, 0, 0.4);

      border: 0;
      border-radius: 4px;

      margin-bottom: 10px;

      font-size: 18px;
      font-family: Helvetica, sans-serif;

      color: #fff;
    }

    img {
      width: 925px;
      height: 300px;

      object-fit: cover;

      border-radius: 4px;
    }

    span {
      color: rgba(255, 255, 255, 0.3);

      font-weight: bold;
    }

    svg {
      color: rgba(255, 255, 255, 0.3);
    }

    input {
      display: none;
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
