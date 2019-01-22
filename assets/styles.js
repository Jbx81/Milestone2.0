import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    padding: 10,
    // color: 'rgba(0,0,0,0.2)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    borderRadius: 50,
  },
  welcome: {
    marginTop: 20,
    flex: 3,
  },
});

export default styles;
