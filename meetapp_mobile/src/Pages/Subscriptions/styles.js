/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import GButton from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;

  padding: 0 20px;
`;

export const DateNavigator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 30px 0;
`;

export const Text = styled.Text`
  margin: 0 15px;

  color: #fff;

  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const MeetupContainer = styled.View`
  background: #fff;

  border-radius: 4px;

  width: 100%;
  height: 345px;

  margin-top: 20px;
  padding: 0 20px;
`;

export const Banner = styled.Image`
  height: 150px;
  width: auto;

  margin: 0 -20px 20px -20px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TIcon = styled(Icon)`
  color: #999;

  font-size: 14px;

  margin-right: 5px;
`;

export const MeetupTitle = styled.Text`
  color: #333;

  margin-bottom: 10px;
  margin-left: -2px;

  font-size: 18px;
  font-weight: bold;
  font-family: Helvetica;
`;
export const MeetupDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const MeetupLocation = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const MeetupOrganizer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const MeetupInfo = styled.Text`
  color: #999;

  font-size: 13px;
  font-family: Helvetica;
`;

export const Button = styled(GButton)`
  height: 40px;
`;
