import React from 'react';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Field, Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';

export default class ProjectForm extends React.Component {
  state = {
    projSummary: '',
    projStart: '',
    projEnd: '',
  };

  finalSubmit = values => {
    this.setState({
      projSummary: values.projSummary,
      projStart: values.projStart,
      projEnd: values.projEnd,
    });
    console.log('our state after submit: ', this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Add Your Project Details" />
        </Appbar.Header>
        <View style={styles.content}>
          <Formik
            initialValues={{ firstName: '' }}
            onSubmit={values => {
              Alert.alert(JSON.stringify(values, null, 2));
              Keyboard.dismiss();
              this.finalSubmit(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <TextInput
                  label="Project Title"
                  type="outlined"
                  value={values.projectSummary}
                  onChangeText={handleChange('projectSummary')}
                />

                <TextInput
                  label="Project Start Date"
                  type="outlined"
                  value={values.startDate}
                  onChangeText={handleChange('startDate')}
                />

                <TextInput
                  label="Project End Date"
                  type="outlined"
                  value={values.endDate}
                  onChangeText={handleChange('endDate')}
                />
                <Button onPress={handleSubmit} style={styles.button}>
                  Save Project to Google Calendar
                </Button>
              </View>
            )}
          </Formik>
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
