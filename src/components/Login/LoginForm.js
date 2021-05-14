import React from 'react';
import { Container, Header, Item, Input, Footer, Content, Form} from 'native-base';
import { Alert, Pressable, Text, Button } from 'react-native';
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


const LoginForm = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const temporaryTestValidation = () => {
      if (email === 'test@test.com' && password === 'Test123!'){
        navigation.navigate('Home');
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
          if (email === 'test@test.com' && password === 'Test123!'){
            navigation.navigate('Home');
          }
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
        <Container>
        <Content padder>
        <Form>
            <Item>
              <Input placeholder="Correo Electronico" onChangeText={setEmail} />
            </Item>
            <Item last>
              <Input placeholder="Contraseña" onChangeText={setPassword} secureTextEntry/>
            </Item>
            <Button onPress={loginUser} title="Iniciar Sesión" />
          </Form>
        </Content>
        <Footer />
      </Container>
    );
};

export default LoginForm;
