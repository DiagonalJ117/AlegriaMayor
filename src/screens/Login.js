import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container, Tabs, Tab, Header, Content, DefaultTabBar} from 'native-base';
import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';

const Login = ({route, navigation}) => {
    //Este parametro viene de cuando el usuario hace clic en Iniciar Sesión o Crear Cuenta,
    // y se le pasa el parametro para saber a que botón se le dió clic y que form se debe mostrar.
    const { signup } = route.params;
    const [isSignup, setIsSignup] = useState(signup);
    const [formErrors, setFormErrors] = useState([]);
    const [ready, setReady] = useState(false);

    const renderTabBar = (props) => {
        props.tabStyle = Object.create(props.tabStyle);
        return <DefaultTabBar {...props} />;
      };

    //Realiza el cambio de la barra de titulo cuando se cambia de pestaña
    const handleTabChange = (tab) => {
        if (tab.i === 0){
            setIsSignup(true);
            navigation.setOptions({ title: 'Registro'});
        } else {
            setIsSignup(false);
            navigation.setOptions({ title: 'Iniciar Sesión'});
        }
    };
    //Coloca el valor inicial de la barra de titulo cuando se carga el componente.
    useEffect(() => {
        isSignup ? navigation.setOptions({ title: 'Registro'}) : navigation.setOptions({ title: 'Iniciar Sesión'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSignup]);
    return (
        <Container>
            <Tabs initialPage={isSignup ? 0 : 1} onChangeTab={handleTabChange} renderTabBar={renderTabBar} style={styles.tabBar}>
                <Tab heading="Registro">
                    <SignupForm/>
                </Tab>
                <Tab heading="Iniciar Sesión">
                    <LoginForm />
                </Tab>
            </Tabs>
        </Container>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#03A9F5'
    }
});

export default Login;
