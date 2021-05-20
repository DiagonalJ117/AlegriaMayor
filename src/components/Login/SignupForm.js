import React from 'react';
import { Input } from 'react-native-elements';
import { Alert, Button, StyleSheet, View } from 'react-native';
import firebase from '../../database/firebaseDB';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';


const ShowAlert = (title, message) =>
  Alert.alert(
    title,
    message,
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]
  );


const SignupForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [cellphone, setCellphone] = useState('');

  const signupUser = () => {
    try {
      if (password.length < 6) {
        ShowAlert('Error', 'La contraseña debe tener al menos 6 caracteres');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        //console.log(user)
        ShowAlert('Success', JSON.stringify(user));
      });
      navigation.navigate('Home');
    } catch (error) {
      //  console.log(error.toString());
      ShowAlert('Error', error.toString());
      return;
    }
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroupContainer}>
        <Input
          placeholder="Nombre"
          onChangeText={setUserName}
        />
        <Input
          placeholder="Celular"
          onChangeText={setCellphone}
        />
        <Input placeholder="Correo Electronico" onChangeText={setEmail} />
        <Input placeholder="Contraseña" onChangeText={setPassword} secureTextEntry />
      </View>
      <Button onPress={signupUser} title="Registrarse" />
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

export default SignupForm;
