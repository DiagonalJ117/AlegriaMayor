import React from 'react';
import { Container, Header, Item, Input, Footer, Content, Form} from 'native-base';
import { Alert, Pressable, Text, Button } from 'react-native';
import firebase from '../../database/firebaseDB';
import { useState } from 'react';
import { Formik } from 'formik';
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
          if (password.length < 6){
            ShowAlert('Error', 'La contraseña debe tener al menos 6 caracteres');
            return;
          }
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
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
        <Container>
        <Content padder>
        <Form>
            <Item>
              <Input
                placeholder="Nombre"
                onChangeText={setUserName}
              />
            </Item>
            <Item>
              <Input
                placeholder="Celular"
                onChangeText={setCellphone}
              />
            </Item>
            <Item>
              <Input placeholder="Correo Electronico" onChangeText={setEmail} />
            </Item>
            <Item last>
              <Input placeholder="Contraseña" onChangeText={setPassword} secureTextEntry/>
            </Item>
            <Button onPress={signupUser} title="Registrarse" />
          </Form>
        </Content>
        <Footer />
      </Container>
    );
};

export default SignupForm;
