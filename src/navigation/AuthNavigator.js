import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignupForm from '../components/Login/SignupForm';
import LoginForm from '../components/Login/LoginForm';

const Tab = createMaterialTopTabNavigator();


const AuthNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={SignupForm} options={({ state }) => ({ title: 'Registro', headerTintColor: 'white'})}/>
            <Tab.Screen name="Login" component={LoginForm} />
        </Tab.Navigator>
    )
}

export default AuthNavigator
