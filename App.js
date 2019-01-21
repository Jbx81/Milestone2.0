import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';
import {
  androidClientId,
  iosClientId,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from './superSecret';
import AddProject from './AddProject';

export default class App extends React.Component {
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
  signIn = async () => {
    // this.setState({
    //   signedIn: true,
    //   name: 'Jon Snow',
    //   photoUrl:
    //     'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
    // });

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
    });
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
          />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

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
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Button title="Log out" onPress={() => props.signOut()} />
      <AddProject user={props.user} accessToken={props.accessToken} />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 100,
  },
});
