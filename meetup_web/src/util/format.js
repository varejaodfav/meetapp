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
import { format, parseISO } from 'date-fns';

export function formatDate(date) {
  return format(parseISO(date), "d 'de' MMMM', às' HH':'mm'h'", {
    locale: pt,
  });
}
