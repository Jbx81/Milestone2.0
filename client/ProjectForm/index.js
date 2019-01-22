import React from 'react';
import {
  Alert,
  Keyboard,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
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
    events: {},
    milestones: false,
    milestoneSummary: '',
    milestoneEnd: '',
    showCancel: false,
  };

  // finalSubmit = (event, i) => {
  //   let allEvents = { ...this.state.events };
  //   allEvents[i] = event;
  //   this.setState({ events: allEvents });
  //   this.setState({ eventStored: !this.state.eventStored });
  // };

  // toggleCancel() {
  //   this.setState({
  //     showCancel: !this.state.showCancel,
  //   });
  // }

  // _renderCancel() {
  //   if (this.state.showCancel) {
  //     return (
  //       <View>
  //         <TouchableHighlight onPress={this.toggleCancel()}>
  //           <View>
  //             <Text style={styles.cancelButtonText}>Nope, no milestones.</Text>
  //           </View>
  //         </TouchableHighlight>
  //         <TextInput
  //           initialValue=""
  //           label="Milestone"
  //           type="outlined"
  //           disabled={!this.state.milestones}
  //           value={this.state.milestoneSummary}
  //           onChangeText={text => this.setState({ milestoneSummary: text })}
  //         />

  //         <TextInput
  //           initialValue=""
  //           label="Milestone Due Date"
  //           type="outlined"
  //           disabled={!this.state.milestones}
  //           placeholder="yyyy-mm-dd"
  //           value={this.state.milestoneEnd}
  //           onChangeText={text => this.setState({ milestoneEnd: text })}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <TouchableHighlight onPress={this.toggleCancel()}>
  //         <View>
  //           <Text style={styles.cancelButtonText}>Any milestones?</Text>
  //         </View>
  //       </TouchableHighlight>
  //     );
  //   }
  // }

  render() {
    let i = 0;
    if (i)
      milestoneSummary = `${this.state.projSummary}-${
        this.state.projectSummary
      }`;
    const event = {
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
                console.log('event is: ', event);
                Keyboard.dismiss();
                // this.finalSubmit(event, i);
              }}
            >
              {({ handleChange, handleSubmit }) => (
                <ScrollView>
                  <View>
                    <TextInput
                      initialValue=""
                      label="Project Title"
                      type="outlined"
                      value={this.state.projSummary}
                      onChangeText={text =>
                        this.setState({ projSummary: text })
                      }
                    />

                    <TextInput
                      initialValue=""
                      label="Project Start Date"
                      type="outlined"
                      placeholder="yyyy-mm-dd"
                      value={this.state.projStart}
                      onChangeText={text => this.setState({ projStart: text })}
                    />

                    <TextInput
                      initialValue=""
                      label="Project End Date"
                      type="outlined"
                      placeholder="yyyy-mm-dd"
                      value={this.state.projEnd}
                      onChangeText={text => this.setState({ projEnd: text })}
                    />

                    {/* <TextInput
                      onFocus={this.toggleCancel()}
                      onChangeText={text => this.doSearch({ input: text })}
                    /> */}
                    {/* {this._renderCancel()} */}

                    <Button onPress={handleSubmit} style={styles.button}>
                      Submit form by logging into Google
                    </Button>
                  </View>
                </ScrollView>
              )}
            </Formik>
          </View>
          {i + 1 ? <GoogleAuth event={event} /> : null}
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
