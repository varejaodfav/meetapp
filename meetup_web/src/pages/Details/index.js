/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

// Servicos
import api from '~/services/api';
import history from '~/services/history';

// Estilos
import {
  Container,
  Title,
  Banner,
  Scroll,
  DetailContent,
  Footer,
} from './styles';

export default function Details() {
  const details = useSelector(state => state.meetup.details);

  // Funções
  function handleMeetup() {
    history.push('/meetup');
  }

  async function cancelMeetup() {
    const response = await api.delete(`/meetups/${details.id}`);

    if (!response.ok) {
      toast.error('Falha ao cancelar meetup');
      return;
    }

    toast.success('Meetup cancelado com sucesso!');
    history.push('/dashboard');
  }

  return (
    <Container>
      {details ? (
        <>
          <Title>
            <h1>{details.title}</h1>
            <div className="buttons">
              <button
                type="button"
                className="edit"
                onClick={handleMeetup}
                disabled={details.past}
              >
                <div>
                  <MdModeEdit size={20} />
                  <span>Editar</span>
                </div>
              </button>

              <button
                type="button"
                className="cancel"
                onClick={cancelMeetup}
                disabled={details.past}
              >
                <div>
                  <MdDeleteForever size={20} />
                  <span>Cancelar</span>
                </div>
              </button>
            </div>
          </Title>
          <Banner>
            <img src={details.banner_url} alt="Banner" />
          </Banner>
          <Scroll>
            <DetailContent>
              <p>{details.description}</p>
            </DetailContent>
          </Scroll>
          <Footer>
            <div>
              <MdEvent size={20} />
              <span>{details.formattedDate}</span>
            </div>
            <div>
              <MdPlace size={20} />
              <span>{details.location}</span>
            </div>
          </Footer>
        </>
      ) : (
        <span>Nenhum meetup selecionado!</span>
      )}
    </Container>
  );
}
