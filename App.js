import React from 'react';
import Expo from 'expo';
import { View, Text } from 'react-native';
import GoogleAuth from './client/GoogleAuth';
import styles from './assets/styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>Hello World</Text>
        </View>
        <GoogleAuth />
      </View>
    );
  }
}
