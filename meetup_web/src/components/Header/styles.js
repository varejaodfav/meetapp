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
import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 31px;
    }

    a {
      font-weight: bold;
      color: #fff;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 20px;
  padding-left: 20px;

  font-family: Helvetica;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;

      margin-top: 4px;

      color: #999;

      font-size: 14px;
    }
  }

  button {
    height: 42px;
    width: 71px;

    margin-left: 30px;

    border: none;
    border-radius: 4px;

    font-size: 16px;
    font-weight: bold;
    font-family: Helvetica;

    color: #fff;
    background: #d44059;

    &:hover {
      background: ${darken(0.08, '#d44059')};
    }
  }
`;
