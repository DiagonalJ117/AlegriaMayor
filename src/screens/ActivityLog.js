import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity} from 'react-native';
const ActivityLog = () => {
    return (
        <View style = {styles.container}>


        <View style={styles.container1}>
         <Text style={styles.paragraph}> ACTIVIDAD</Text>
         </View>

         <View style={styles.container2}>
         <View style={styles.rectangle} />

         <Text style={styles.timetext}>17/01/2021 - 9:00 PM</Text>
         <Text style={styles.advicetext}>Registro exitoso del nuevo adulto mayor!</Text>

         <View style={styles.rectangle} />
         <Text style={styles.advicetext2}>No se encontraron más registros.</Text>
      </View>

     <View style={styles.container3} />

  </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    rectangle: {
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        height: 4,
        width: 340,
        marginLeft: 8,
        marginTop: 20,
        backgroundColor:'#666666',
    },

    timetext: {
      marginLeft: 10,
      fontSize: 15,
      textAlign: 'left',
      color: '#434343',
      fontWeight: 'bold',
    },

    advicetext: {
      marginRight: 10,
      fontSize: 15,
      textAlign: 'right',
      color: '#434343',
      fontWeight: 'bold',
    },

    advicetext2: {
      marginRight: 10,
      fontSize: 17,
      textAlign: 'center',
      color: '#666666',
      fontWeight: 'bold',
    },

    container1: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#689ACA',
    },

    container2: {
      flex: 7,
      backgroundColor: '#D2E1EF',
    },

    container3: {
      flex: 1,
      backgroundColor: '#689ACA',
    },

    paragraph: {
      margin: 8,
      fontSize: 40,
      textAlign: 'left',
      color: 'white',
    },
  });

export default ActivityLog;
