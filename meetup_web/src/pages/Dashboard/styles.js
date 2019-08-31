/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import styled from 'styled-components';
import { darken } from 'polished';
import ScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 900px;
  margin: 50px auto;

  font-family: Helvetica;

  h1 {
    color: #fff;

    font-size: 32px;
  }

  a {
    display: block;

    text-decoration: none;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      background: ${darken(0.4, 'rgba(0, 0, 0, 0.1)')};
      transition: 0.5s;
    }
  }
`;

export const Scroll = styled(ScrollBar)`
  margin: auto;
  max-height: 440px;

  div {
    &.ps__rail-y {
      &:hover {
        background: none;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;

  button {
    width: 162px;
    height: 42px;

    padding: 0px;

    border: 0;
    border-radius: 4px;

    color: #fff;
    background: #f94d6a;

    font-size: 16px;
    font-weight: bold;
    font-family: Helvetica;

    div {
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

    &:hover {
      background: ${darken(0.08, '#f94d6a')};
    }
  }
`;

export const Meetup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 63px;

  padding: 30px;

  border-radius: 4px;

  background: ${props =>
    props.past ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'};

  strong {
    font-size: 18px;

    color: ${props => (props.past ? 'rgba(255, 255, 255, 0.08)' : '#fff')};
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${props =>
        props.past ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.6)'};

      font-size: 16px;
    }

    svg {
      margin-left: 30px;

      color: ${props => (props.past ? 'rgba(255, 255, 255, 0.08)' : '#fff')};
      font-size: 26px;
      font-family: Arial;
    }
  }
`;
