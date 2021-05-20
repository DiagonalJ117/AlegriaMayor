import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import LoginMenu from '../screens/LoginMenu';
import ActivityLog from '../screens/ActivityLog';
import { StyleSheet } from 'react-native';
import LoggedIn from '../screens/LoggedIn';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login Menu" component={LoginMenu} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={({ route }) => ({ title: route.params.name , headerStyle: styles.normalHeader, headerTintColor: 'white'})} />
      <Stack.Screen name="LoggedIn" component={LoggedIn} options={({ route }) => ({ headerShown: false})} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  normalHeader: {
    backgroundColor: '#03A9F5',
  },
})

export default MainStackNavigator;
