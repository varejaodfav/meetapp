export default function Meetup({data}) {
  return (
    <MeetupList
      data={meetups}
      keyExtractor={meetup => String(meetup.id)}
      renderItem={({item: meetup}) => (
        <MeetupContainer>
          <Banner
            source={{
              uri: meetup.banner.url,
            }}
          />
          <MeetupTitle>{meetup.title}</MeetupTitle>

          <MeetupDate>
            <TIcon name="event" />
            <MeetupInfo>
              {format(parseISO(meetup.date), "d 'de' MMMM', às' HH':'mm'h'", {
                locale: pt,
              })}
            </MeetupInfo>
          </MeetupDate>

          <MeetupLocation>
            <TIcon name="place" />
            <MeetupInfo>{meetup.location}</MeetupInfo>
          </MeetupLocation>

          <MeetupOrganizer>
            <TIcon name="person" />
            <MeetupInfo>Organizador: {meetup.organizer.name}</MeetupInfo>
          </MeetupOrganizer>

          <Button onPress={() => handleSubmit(meetup.id)}>
            Realizar inscrição
          </Button>
        </MeetupContainer>
      )}
    />
  );
}
