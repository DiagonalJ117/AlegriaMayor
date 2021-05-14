import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import LoginMenu from '../screens/LoginMenu';
import ActivityLog from '../screens/ActivityLog';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login Menu" component={LoginMenu} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} options={({ route }) => ({ title: route.params.name})} />
      <Stack.Screen name="Actividad" component={ActivityLog} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
