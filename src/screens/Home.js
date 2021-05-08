import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.paragraph}>ALEGRIA MAYOR</Text>
            </View>
            <View style={styles.container2}>
                <Image style={styles.cuadro, { width: 200, height: 200 }} resizeMode="contain" source={require('../assets/img/adultos.png')}/>

                <Pressable style={styles.button1} onPress={() => navigation.navigate('Login',{signup: false})}>
                    <Text style={styles.textobotondentro1}>INICIAR SESION</Text>
                </Pressable>

                <Text style={styles.textobotonarriba}>
                    Es usted nuevo en la app?
                </Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login', { signup: true})}>
                    <Text style={styles.textobotondentro}>CREAR CUENTA</Text>
                </Pressable>
            </View>
            <View style={styles.container3} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    container1: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#18CFD8',
        alignItems: 'center',
    },

    container2: {
        flexDirection: 'column',
        flex: 7,
        backgroundColor: '#A0F3F7',
        alignItems: 'center',
    },

    container3: {
        flex: 1,
        backgroundColor: '#18CFD8',
        alignItems: 'center',
    },

    paragraph: {
        margin: 24,
        fontSize: 25,
        color: 'white',
    },

    textobotonarriba: {
        padding: 8,
        fontSize: 19,
        color: 'black',
    },

    textobotondentro1: {
        fontSize: 19,
        color: '#000000',
    },

    textobotondentro: {
        fontSize: 19,
        color: '#128021',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#32DF4A',
        padding: 10,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },

    button1: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#39C9CB',
        marginVertical: 30,
        padding: 1,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },

    cuadro: {
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
});

export default Home;
