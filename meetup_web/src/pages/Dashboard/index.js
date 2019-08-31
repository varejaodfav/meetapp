/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isBefore, parseISO } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

// Serviços
import api from '~/services/api';
import history from '~/services/history';

// Redux/Saga
import { meetupDetailsRequest } from '~/store/modules/meetup/actions';

// Utilitários
import { formatDate } from '~/util/format';

// Estilos
import { Container, Title, Scroll, Meetup } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/organized`);

      if (!response.data) {
        toast.info('Você ainda não organizou nenhum meetup');
        return;
      }

      if (!response.ok) {
        toast.error('Erro ao acessar os detalhes do meetup');
        history.push('/dashboard');
        return;
      }

      const { data } = response;
      const meetups = data.map(item => ({
        ...item,
        past: isBefore(parseISO(item.date), new Date()),
        formattedDate: formatDate(item.date),
      }));

      setMeetup(meetups);
    }

    loadMeetup();
  }, []);

  // Funções
  function handleClick() {
    dispatch(meetupDetailsRequest(null));
    history.push('/meetup');
  }

  function handleMeetup(meetupId) {
    dispatch(meetupDetailsRequest(meetupId));
  }

  return (
    <Container>
      <Title>
        <h1>Meus meetups</h1>
        <button type="button" onClick={handleClick}>
          <div>
            <MdAddCircleOutline size={20} />
            <span>Novo meetup</span>
          </div>
        </button>
      </Title>
      <ul>
        <Scroll>
          {meetup.map(list => (
            <Link
              to="/details"
              key={list.id}
              onClick={() => handleMeetup(list.id)}
            >
              <Meetup past={list.past}>
                <strong>{list.title}</strong>
                <nav>
                  <span>{list.past ? 'Encerrado' : list.formattedDate}</span>
                  <MdChevronRight />
                </nav>
              </Meetup>
            </Link>
          ))}
        </Scroll>
      </ul>
    </Container>
  );
}
