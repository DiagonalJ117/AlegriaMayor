import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ActivityLog from '../screens/ActivityLog';
import Locate from '../screens/Locate';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EmergencyContacts from '../screens/EmergencyContacts';

const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
    return (
            <Tab.Navigator tabBarOptions={{
                style: styles.tabBar,
                activeTintColor: 'white',
                inactiveTintColor: 'rgba(255, 255, 255, 0.74)',
              }}>
                <Tab.Screen name="Home" component={Home}
                options={{ 
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="home" color={color} size={20} />
                    ),
                    }}
                />
                <Tab.Screen name="Activity" component={ActivityLog} options={{
                    tabBarLabel: 'Actividad',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="list" color={color} size={20} />
                    ),
                }} />
                <Tab.Screen name="Locate" component={Locate} options={{
                    tabBarLabel: 'Localizar',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="location" color={color} size={20} />
                    ),
                }} />
                <Tab.Screen name="Contacts" component={EmergencyContacts} options={{
                    tabBarLabel: 'Contactos',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="person" color={color} size={20} />
                    ),
                }} />
            </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    normalHeader: {
      backgroundColor: '#03A9F5',
    },
    tabBar: {
        backgroundColor: '#03A9F5',
    }
  })

export default MainTabNavigator;
