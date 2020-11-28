import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Register from './components/Register';
import Successful from './components/Successful';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Register}
            options={{
              title: 'Mroads Registeration',
              headerStyle: styles.navigationHeader,
              headerTitleStyle: styles.navigationHeaderText,
            }}
          />
          <Stack.Screen
            name="success"
            component={Successful}
            options={{
              title: 'Success',
              headerStyle: styles.navigationHeader,
              headerTitleStyle: styles.navigationHeaderText,
              headerTintColor: '#111'
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigationHeader: {
    backgroundColor: '#fff',
  },
  navigationHeaderText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#222',
  },
});

export default App;
