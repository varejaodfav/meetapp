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
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Serviços
import api from '~/services/api';

// Utilitários
import {relative} from '~/util/format';

// Redux actions
import {cancelSubscription} from '~/store/modules/subscriptions/actions';

// Estilos
import {
  Container,
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

// Componentes
import Header from '~/components/Header';
import Background from '~/components/Background';

function Subscriptions({isFocused}) {
  const [subscriptions, setSubscriptions] = useState([]);
  const {canceled} = useSelector(state => state.subscriptions);

  const dispatch = useDispatch();

  async function loadSubscriptions() {
    const response = await api.get('meetups/subscription');

    if (!response.ok) {
      Alert.alert(
        'Falha na conexão',
        `Não conseguimos obter informações sobre meetups inscritos: "${response.data.error}"`,
      );
      return;
    }

    setSubscriptions(response.data);
  }

  // Side-effects
  useEffect(() => {
    if (isFocused || canceled) {
      loadSubscriptions();
    }
  }, [canceled, isFocused]);

  async function handleCancel(meetup) {
    dispatch(cancelSubscription(meetup));
  }

  return (
    <Background>
      <Header />
      <Container>
        <MeetupList
          data={subscriptions}
          keyExtractor={meetup => String(meetup.id)}
          renderItem={({item: meetup}) => (
            <MeetupContainer>
              <Banner
                source={{
                  uri: meetup.Meetup.banner.url,
                }}
              />
              <MeetupTitle>{meetup.Meetup.title}</MeetupTitle>

              <MeetupDate>
                <TIcon name="event" />
                <MeetupInfo>{relative(meetup.Meetup.date)}</MeetupInfo>
              </MeetupDate>

              <MeetupLocation>
                <TIcon name="place" />
                <MeetupInfo>{meetup.Meetup.location}</MeetupInfo>
              </MeetupLocation>

              <MeetupOrganizer>
                <TIcon name="person" />
                <MeetupInfo>
                  Organizador: {meetup.Meetup.organizer.name}
                </MeetupInfo>
              </MeetupOrganizer>

              <Button onPress={() => handleCancel(meetup.id)}>
                Cancelar inscrição
              </Button>
            </MeetupContainer>
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
