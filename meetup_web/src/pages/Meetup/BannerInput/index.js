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
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import React, { useState, useRef, useEffect } from 'react';

// Serviços
import api from '~/services/api';

// Estilos
import { Container } from './styles';

export default function BannerInput() {
  const { error } = useField('banner_id');
  const { defaultValue: defaultId } = useField('banner_id');
  const { defaultValue: defaultPreview, registerField } = useField('banner');

  // Estados
  const [file, setFile] = useState(defaultId && defaultId);
  const [preview, setPreview] = useState(defaultPreview && defaultPreview.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    // Se erro na requisição da API, informe ao usuário
    if (!response.ok) {
      toast.error('Falha ao enviar banner');
      return;
    }

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {/* Se existir algum preview utilize, se não use a div padrão */}
        {preview ? (
          <img src={preview} alt="MeetupBanner" />
        ) : (
          <div>
            <MdPhotoCamera size={54} />
            <span>Selecionar imagem</span>
          </div>
        )}

        <input
          ref={ref}
          id="banner"
          type="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
