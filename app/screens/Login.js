import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight,
} from 'react-native';

import LoginDecoration from '../views/LoginDecoration';

export default function Login({ navigation }) {
  return (
    <View style={styles.loginView}>
      <LoginDecoration />
      <Text style={[styles.heading, styles.textBase]}>Before We Begin.</Text>

      <View style={styles.inputView}>
        <Text style={styles.textBase}>Name</Text>
        <TextInput style={styles.input} placeholder="Full Name" />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.textBase}>Email </Text>
        <TextInput style={styles.input} placeholder="Email Address" />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.textBase}>Phone</Text>
        <TextInput style={styles.input} placeholder="+977 XXXX XXXXXX" />
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('Home')}
        style={styles.actionBtn}
        underlayColor="#eee"
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({

  loginView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,

  },

  textBase: {
    color: '#656565',
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  inputView: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    backgroundColor: '#fff',
    minWidth: '60%',
    margin: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },

  actionBtn: {
    backgroundColor: '#35A7FF',
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    position: 'absolute',
    bottom: 60,
  },

  continueText: {
    color: '#fff',
    fontSize: 20,
  },

});
