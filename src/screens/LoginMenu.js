import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

const LoginMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Alegría Mayor</Text>
            </View>
            <View style={styles.contentContainer}>
                <Image style={styles.mainImg} resizeMode="contain" source={require('../assets/img/adultos2.png')}/>

                <Button title="Iniciar Sesión" buttonStyle={styles.loginBtn} titleStyle={styles.loginBtnText} onPress={() => navigation.navigate('Login',{signup: false})} />

                <Text style={styles.registerBtnHint}>
                    Es usted nuevo en la app?
                </Text>
                <Button title="Registrarse" buttonStyle={styles.registerBtn} titleStyle={styles.registerBtnText} onPress={() => navigation.navigate('Login', { signup: true})} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '25%',
        justifyContent: 'center',
        backgroundColor: '#67DAFF',
    },

    titleContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: '100',
        color: 'black',
    },

    registerBtnHint: {
        padding: 8,
        fontSize: 19,
        color: 'black',
    },

    loginBtnText: {
        fontSize: 24,
        color: 'white',
    },

    registerBtnText: {
        fontSize: 24,
        color: 'white',
    },

    registerBtn: {
        alignItems: 'center',
        backgroundColor: '#007AC2',
        padding: 5,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },

    loginBtn: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#03A9F5',
        padding: 1,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },

    mainImg: {
        width: 200,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default LoginMenu;
