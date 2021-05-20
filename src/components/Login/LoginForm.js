import React from 'react';
import { Alert, Pressable, Text, Button, TextInput, View, StyleSheet } from 'react-native';
import firebase from '../../database/firebaseDB';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements';



const ShowAlert = (title, message) =>
    Alert.alert(
        title,
        message,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );


const LoginForm = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const temporaryTestValidation = () => {
      if (email === 'test@test.com' && password === 'Test123!'){
        navigation.navigate('LoggedIn');
      }
    };

    const loginUser = () => {
        try {
          if (email.length < 6){
            ShowAlert('Error','Debe Ingresar el Correo');
            return;
          }
          if (password.length < 6){
            ShowAlert('Error', 'Debe Ingresar la Contraseña');
            return;
          }
          // if (email === 'test@test.com' && password === 'Test123!'){
          //   navigation.navigate('LoggedIn');
          // }

          navigation.navigate('LoggedIn');
          // firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
          //   //console.log(user)
          //   ShowAlert('Success', JSON.stringify(user));
          //   navigation.navigate('Home');
          // });
        } catch (error) {
        //  console.log(error.toString());
         ShowAlert('Error', error.toString());
         return;
        }
       };
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputGroupContainer}>
          <Input placeholder="Correo Electronico" onChangeText={setEmail} autoCompleteType="email" />
          <Input placeholder="Contraseña" onChangeText={setPassword} secureTextEntry/>
        </View>

        <Button onPress={loginUser} title="Iniciar Sesión" />
      </View>

    );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  inputGroupContainer: {
    flexDirection: 'column',
  },
});

export default LoginForm;
