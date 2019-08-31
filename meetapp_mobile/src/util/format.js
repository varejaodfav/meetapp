/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import pt from 'date-fns/locale/pt';
import {parseISO, formatRelative} from 'date-fns';

export function relative(date) {
  return formatRelative(parseISO(date), new Date(), {
    locale: pt,
    addSuffix: true,
  });
}
