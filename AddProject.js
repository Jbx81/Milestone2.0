import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';

export default class AddProject extends React.Component {
  constructor(props) {
    super(props);
  }
  createEvent = () => {
    try {
      console.log(`adding project to ${this.props.user.name}'s calendar!`);
      // at this point we make a POST request to the calendar api.  On success ternary reveal the success message or error.
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View>
        <Button title="Add Your Project" onPress={() => this.createEvent()} />
      </View>
    );
  }
}
