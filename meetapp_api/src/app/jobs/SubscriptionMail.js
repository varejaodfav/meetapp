/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

// Bibliotecas
import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    await Mail.sendMail({
      to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
      subject: 'Nova inscrição no seu meetup',
      template: 'subscriptions',
      context: {
        meetup: meetup.title,
        date: format(parseISO(meetup.date), "dd 'de' MMMM 'às' H:mm'h'", {
          locale: pt,
        }),
        organizer: meetup.organizer.name,
        subscriber: user.fulfillmentValue.name,
        email: `<${user.fulfillmentValue.email}>`,
      },
    });
  }
}

export default new SubscriptionMail();
