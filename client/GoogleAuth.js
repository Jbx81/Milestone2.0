import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';
import {
  androidClientId,
  iosClientId,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../superSecret';
import styles from '../assets/styles';

export default class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: '',
      photoUrl: '',
      user: {},
      accessToken: '',
    };
  }
  // methods
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: iosClientId,
        scopes: [
          'profile',
          'email',
          'https://www.googleapis.com/auth/calendar',
        ],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          user: result.user,
          accessToken: result.accessToken,
        });
        console.log('returned result: ', result);
        console.log('our logged in state is: ', this.state);
      } else {
        console.log('Result type: ', result.type);
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  signOut = async () => {
    this.setState({
      signedIn: false,
      name: '',
      photoUrl: '',
      user: {},
      accessToken: '',
    });
  };

  createEvent = async props => {
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
          body: JSON.stringify(props.event),
        }
      );
      console.log(
        `adding project to calendar. Response is: `,
        await response.json()
      );
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage
            name={this.state.name}
            photoUrl={this.state.photoUrl}
            signOut={this.signOut}
            user={this.state.user}
            accessToken={this.state.accessToken}
            createEvent={this.createEvent}
            event={this.props.event}
          />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

// stateless components
const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome: {props.user.givenName}</Text>
      <AddProject {...props} />
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Button title="Log out" onPress={() => props.signOut()} />
    </View>
  );
};

const AddProject = props => {
  const { createEvent } = props;
  return (
    <View>
      <Button title="Add Your Project" onPress={() => createEvent(props)} />
    </View>
  );
};
