import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: '',
      photoUrl: '',
    };
  }

  signIn = async () => {
    this.setState({
      signedIn: true,
      name: 'Jon Snow',
      photoUrl:
        'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
    });
  };
  render() {
    return (
      <view style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </view>
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
      <Text style={styles.header}>Welcome: {props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
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
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
});
