/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import pt from 'date-fns/locale/pt';
import { parseISO } from 'date-fns';
import { useField } from '@rocketseat/unform';
import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

// Estilos
import { Container } from './styles';

export default function DateInput() {
  registerLocale('pt', pt);

  const { error } = useField('date');
  const { defaultValue, registerField } = useField('date');
  const [timedate, setTimedate] = useState(
    defaultValue && parseISO(defaultValue)
  );

  const ref = useRef();

  useEffect(() => {
    registerField({
      name: 'date',
      ref: ref.current,
      path: 'props.selected',
    });
  }, [ref.current]); // eslint-disable-line

  async function handleChange(date) {
    setTimedate(date);
  }

  return (
    <Container>
      <DatePicker
        popperPlacement="top-start"
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '1px, -20px',
          },
        }}
        placeholderText="Data do meetup"
        selected={timedate}
        locale="pt"
        timeFormat="HH:mm"
        dateFormat="dd 'de' MMMM 'de' YYY, 'às' HH:mm'h'"
        onChange={handleChange}
        timeIntervals={15}
        ref={ref}
        showTimeSelect
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
