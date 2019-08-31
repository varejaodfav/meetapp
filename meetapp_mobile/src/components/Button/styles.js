/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Modulos
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  width: 100%;
  background: #f94d6a;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
