/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {Alert} from 'react-native';
import pt from 'date-fns/locale/pt';
import {useDispatch} from 'react-redux';
import {format, subDays, addDays} from 'date-fns';
import {RectButton} from 'react-native-gesture-handler';
import React, {useState, useMemo, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Serviços
import api from '~/services/api';

// Utilitários
import {relative} from '~/util/format';

// Estilos
import {
  Container,
  DateNavigator,
  Text,
  MeetupList,
  MeetupContainer,
  Banner,
  MeetupInfo,
  MeetupTitle,
  MeetupDate,
  MeetupLocation,
  MeetupOrganizer,
  TIcon,
  Button,
} from './styles';

// Redux actions
import {subscriptionRequest} from '~/store/modules/subscriptions/actions';

// Componentes
import Header from '~/components/Header';
import Background from '~/components/Background';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", {locale: pt}),
    [date],
  );

  // Funções
  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleAddDay() {
    setDate(addDays(date, 1));
  }

  async function handleSubmit(meetupId) {
    dispatch(subscriptionRequest(meetupId));
  }

  // Side-effects
  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups', {
        date,
      });

      if (!response.ok) {
        Alert.alert(
          'Falha na conexão',
          `Não conseguimos obter informações sobre meetups disponíveis: "${response.data.error}"`,
        );
        return;
      }

      setMeetups(response.data);
    }

    loadMeetup();
  }, [date]);

  return (
    <Background>
      <Header />

      <DateNavigator>
        <RectButton onPress={handlePrevDay}>
          <Icon name="chevron-left" size={30} color="white" />
        </RectButton>

        <Text>{dateFormatted}</Text>

        <RectButton onPress={handleAddDay}>
          <Icon name="chevron-right" size={30} color="white" />
        </RectButton>
      </DateNavigator>

      <Container>
        <MeetupList
          data={meetups}
          keyExtractor={meetup => String(meetup.id)}
          renderItem={({item: meetup}) => (
            <MeetupContainer>
              <Banner
                source={{
                  uri: meetup.banner.url,
                }}
              />
              <MeetupTitle>{meetup.title}</MeetupTitle>

              <MeetupDate>
                <TIcon name="event" />
                <MeetupInfo>{relative(meetup.date)}</MeetupInfo>
              </MeetupDate>

              <MeetupLocation>
                <TIcon name="place" />
                <MeetupInfo>{meetup.location}</MeetupInfo>
              </MeetupLocation>

              <MeetupOrganizer>
                <TIcon name="person" />
                <MeetupInfo>Organizador: {meetup.organizer.name}</MeetupInfo>
              </MeetupOrganizer>

              <Button onPress={() => handleSubmit(meetup.id)}>
                Realizar inscrição
              </Button>
            </MeetupContainer>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
