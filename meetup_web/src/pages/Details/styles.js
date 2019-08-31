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
import ScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 940px;

  margin: 50px auto;

  > span {
    margin: auto;

    color: #fff;

    font-size: 18px;
    font-weight: bold;
  }

  h1 {
    color: #fff;

    font-size: 32px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;

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

  button {
    padding: 0px;

    border: 0;
    border-radius: 4px;

    font-size: 16px;
    font-weight: bold;
    font-family: Helvetica;

    color: #fff;

    margin-right: 15px;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &.edit {
      background: #4dbaf9;

      width: 116px;
      height: 42px;

      &:hover {
        background: ${darken(0.08, '#4DBAF9')};
      }
    }

    &.cancel {
      background: #d44059;

      width: 138px;
      height: 42px;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }
`;

export const Banner = styled.div`
  max-height: 925px;
  max-width: 300px;

  img {
    width: 925px;
    height: 300px;

    border-radius: 4px;

    object-fit: cover;
  }
`;

export const Scroll = styled(ScrollBar)`
  max-height: 128px;

  margin-top: 25px;

  padding: 0 15px 0 0;

  > div {
    &.ps__rail-y {
      &:hover {
        background: none;
      }
    }
  }
`;
export const DetailContent = styled.div`
  color: #fff;

  font-size: 18px;

  p {
    white-space: pre-wrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;

  color: rgba(255, 255, 255, 0.6);

  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }

    span {
      color: rgba(255, 255, 255, 0.6);

      margin-right: 30px;
      margin-top: 5px;
    }
  }
`;
