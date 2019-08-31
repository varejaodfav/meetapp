/**
 *  "MeetApp Web"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

// Estilos
import { Container } from './styles';

export default function DescriptionInput() {
  const { error } = useField('description');
  const { defaultValue, registerField } = useField('description');

  // Estados
  const [description, setDescription] = useState(defaultValue && defaultValue);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'description',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  async function handleChange(e) {
    setDescription(e.target.value);
  }

  return (
    <Container>
      <label htmlFor="description">
        <textarea
          id="description"
          defaultValue={description}
          data-file={description}
          onChange={handleChange}
          placeholder="Descrição completa"
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
