/* eslint-disable camelcase */
import * as React from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import Category from './app/screens/Category';
import CourseLanding from './app/screens/CourseLanding';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });
  if (!fontsLoaded) {
    return (<View />);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff00',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          options={{ title: 'Browse Courses' }}
          component={Home}
        />
        <Stack.Screen
          name="Category"
          options={{ title: 'Category' }}
          component={Category}
        />
        <Stack.Screen
          name="CourseLanding"
          options={{ title: 'Course' }}
          component={CourseLanding}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
