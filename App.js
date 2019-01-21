import React from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import GoogleAuth from './client/GoogleAuth';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <GoogleAuth />
      </View>
    );
  }
}
