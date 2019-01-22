import { Field, Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import GoogleAuth from '../GoogleAuth';
import FKTextInput from '../FKTextInput';

const validate = ({ projSummary, projStart, projEnd }) => {
  const errors = {};
  if (projSummary === undefined) {
    errors.projSummary = 'Required';
  } else if (projSummary.trim() === '') {
    errors.projSummary = 'Must not be blank';
  }
  if (projStart === undefined) {
    errors.projStart = 'Required';
  } else if (projStart.trim() === '') {
    errors.projStart = 'Must not be blank';
  }
  if (projEnd === undefined) {
    errors.projEnd = 'Required';
  } else if (projEnd.trim() === '') {
    errors.projEnd = 'Must not be blank';
  }
  return errors;
};

export default class ProjectForm extends React.Component {
  state = {
    projSummary: '',
    projStart: '',
    projEnd: '',
    submitted: false,
  };

  render() {
    return (
      <View>
        <View>
          <Appbar.Header>
            <Appbar.Content title="Add Your Project Details" />
          </Appbar.Header>
          <View>
            <Formik
              onSubmit={({ projSummary, projStart, projEnd }) => {
                this.setState({
                  projSummary,
                  projStart,
                  projEnd,
                  submitted: !this.state.submitted,
                });
              }}
              validate={validate}
              render={({ handleSubmit, isValid }) => (
                <View>
                  <Field component={FKTextInput} name="projSummary" />
                  <Field component={FKTextInput} name="projStart" />
                  <Field component={FKTextInput} name="projEnd" />
                  <Button
                    disabled={!isValid}
                    title="Track Project (this will add the project to your Google Calendar)"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            />
          </View>
          {this.state.submitted ? <GoogleAuth /> : null}
        </View>
      </View>
    );
  }
}
