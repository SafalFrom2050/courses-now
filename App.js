
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';

import Login from './pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent:"center",
    alignItems:"center",
  },
});
