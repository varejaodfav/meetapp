/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>\
 *
 */

// Módulos
import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

// Componentes
import DatePicker from './DatePicker';
import BannerInput from './BannerInput';
import DescriptionInput from './DescriptionInput';

// Estilos
import { Container, Scroll } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título do evento é obrigatório'),
  location: Yup.string().required('A localização do evento é obrigatória'),
  description: Yup.string()
    .transform(value => (!value ? undefined : value))
    .required('A descrição do evento é obrigatória'),
  date: Yup.date()
    .transform(value => (!value ? undefined : value))
    .required('A data do evento é obrigatória'),
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('O banner do evento é obrigatório'),
});

export default function Profile() {
  const dispatch = useDispatch();
  const details = useSelector(state => state.meetup.details);

  // Funções
  function handleSubmit(data) {
    if (!details) {
      dispatch(createMeetupRequest(data));
      return;
    }

    const newData = {
      id: details.id,
      data,
    };
    dispatch(updateMeetupRequest(newData));
  }

  return (
    <Container>
      <Scroll>
        <Form schema={schema} initialData={details} onSubmit={handleSubmit}>
          <BannerInput name="banner_id" />

          <Input name="title" placeholder="Título do meetup" />

          <DescriptionInput name="description" />

          <DatePicker name="date" />

          <Input name="location" placeholder="Localização" />
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} />
              <span>Salvar meetup</span>
            </div>
          </button>
        </Form>
      </Scroll>
    </Container>
  );
}
