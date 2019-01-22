// this.setState({
//   signedIn: true,
//   name: 'Jon Snow',
//   photoUrl:
//     'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
// });

const event2 = {
  summary: 'New Project',
  location: '800 Howard St., San Francisco, CA 94103',
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: '2019-01-22T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  end: {
    dateTime: '2019-01-22T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
  attendees: [
    { email: 'jon.ciccarella@yahoo.com' },
    { email: 'devjon81@gmail.com' },
  ],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 },
    ],
  },
};

const event3 = {
  summary: props.event.summary,
  end: {
    dateTime: props.event.end.dateTime + 'T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  start: {
    dateTime: props.event.start.dateTime + 'T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
};
