import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './superSecret';

export default class AddProject extends React.Component {
  constructor(props) {
    super(props);
  }

  async createEvent(props) {
    try {
      let response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.accessToken}`,
          },
          body: JSON.stringify({
            summary: 'New Project',
            end: {
              dateTime: '2019-01-22T09:00:00-07:00',
              timeZone: 'America/Los_Angeles',
            },
            start: {
              dateTime: '2019-01-22T09:00:00-07:00',
              timeZone: 'America/Los_Angeles',
            },
          }),
        }
      );

      console.log(
        `adding project to calendar!. Response is: `,
        await response.json()
      );
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View>
        <Button
          title="Add Your Project"
          onPress={props => this.createEvent(props)}
        />
      </View>
    );
  }
}

const event = {
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
