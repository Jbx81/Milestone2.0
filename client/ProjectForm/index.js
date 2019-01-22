import React from 'react';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Field, Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';
import GoogleAuth from '../GoogleAuth';

export default class ProjectForm extends React.Component {
  state = {
    projSummary: '',
    projStart: '',
    projEnd: '',
    eventStored: false,
  };

  // finalSubmit = () => {
  //   this.setState({ eventStored: true });
  // };

  render() {
    const event1 = {
      summary: this.state.projSummary,
      end: {
        dateTime: `${this.state.projEnd}T09:00:00-05:00`,
        timeZone: 'America/New_York',
      },
      start: {
        dateTime: `${this.state.projStart}T09:00:00-05:00`,
        timeZone: 'America/New_York',
        timeZone: 'America/Los_Angeles',
      },
    };

    return (
      <View>
        <View style={styles.container}>
          <Appbar.Header>
            <Appbar.Content title="Add Your Project Details" />
          </Appbar.Header>
          <View style={styles.content}>
            <Formik
              onSubmit={() => {
                this.setState({ eventStored: !this.state.eventStored });
                console.log('event is: ', event1);
                Keyboard.dismiss();
              }}
            >
              {({ handleChange, handleSubmit }) => (
                <View>
                  <TextInput
                    label="Project Title"
                    type="outlined"
                    value={this.state.projSummary}
                    onChangeText={text => this.setState({ projSummary: text })}
                  />

                  <TextInput
                    label="Project Start Date"
                    type="outlined"
                    placeholder="yyyy-mm-dd"
                    value={this.state.projStart}
                    onChangeText={text => this.setState({ projStart: text })}
                  />

                  <TextInput
                    label="Project End Date"
                    type="outlined"
                    placeholder="yyyy-mm-dd"
                    value={this.state.projEnd}
                    onChangeText={text => this.setState({ projEnd: text })}
                  />
                  <Button onPress={handleSubmit} style={styles.button}>
                    Log In With Google to Save Project
                  </Button>
                </View>
              )}
            </Formik>
          </View>
          {this.state.eventStored ? <GoogleAuth event={event1} /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});
