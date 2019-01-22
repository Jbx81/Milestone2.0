import React from 'react';
import Expo from 'expo';
import { View, Text, Image, ScrollView } from 'react-native';
import GoogleAuth from './client/GoogleAuth';
import styles from './assets/styles';
import ProjectForm from './client/ProjectForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Image
              style={styles.image}
              source={require('./assets/milestone_512.png')}
            />
            <View>
              <Text style={styles.header}>Milestones</Text>
            </View>
          </View>
          <ProjectForm />
        </View>
      </ScrollView>
    );
  }
}
