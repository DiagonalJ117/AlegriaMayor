import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.container1}>
                <Text style={styles.paragraph}>MENU</Text>
                <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('Actividad')}>
                    <Text style={styles.textobotondentro1}>Actividad</Text>
                </TouchableOpacity>
                <Text style={styles.space} />
                <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('Opciones')}>
                    <Text style={styles.textobotondentro1}>Opciones</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <Text style={styles.mitexto}>
                    NOVEDADES
            </Text>
                <Text style={styles.mitexto2}>
                    Estas al día
                </Text>


            </View>

            <View style={styles.container_bar} />

            <View style={styles.container2sub1}>
                <View style={{ position: 'absolute' }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: '#E23A32',
                        marginVertical: 30,
                        padding: 1,
                        width: 130,
                        height: 130,
                        borderRadius: 100,
                        marginLeft: 220,
                        marginTop: 80,
                        aspectRatio: 1,
                        paddingVertical: 35,
                        paddingHorizontal: 10,
                        resizeMode: 'contain',
                    }}>
                        <Text style={{ marginVertical: 15, fontSize: 25, color: '#283E3C', fontWeight: 'bold' }}>ALERTA</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute' }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: '#6BCDFD',
                        marginVertical: 30,
                        padding: 1,
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        marginLeft: 160,
                        marginTop: 20,
                        aspectRatio: 1,
                        paddingVertical: 35,
                        paddingHorizontal: 10,
                        resizeMode: 'contain',
                    }}>
                        <Text style={{ marginVertical: -5, fontSize: 15, color: '#283E3C', fontWeight: 'bold' }}>ESTADO</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute' }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: '#FFFD71',
                        marginVertical: 30,
                        padding: 1,
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        marginLeft: 260,
                        marginTop: -15,
                        aspectRatio: 1,
                        paddingVertical: 35,
                        paddingHorizontal: 10,
                        resizeMode: 'contain',
                    }}>
                        <Text style={{ marginVertical: -3, fontSize: 12, color: '#283E3C', fontWeight: 'bold' }}>ATENCIÓN</Text>
                    </TouchableOpacity>
                </View>

                <Image style={styles.imagen, styles.cuadro, { width: 90, height: 90, margin: 10 }} resizeMode="contain"
                    source={require('../assets/img/feliz.png')} />
                <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', paddingLeft: 13, marginTop: -8 }}>
                    Tu estado
                </Text>
                <Text style={{ color: '#FC0F3B', fontSize: 19, fontWeight: 'bold', paddingLeft: 8, marginTop: 30 }}>
                    RITMO CARDIACO
                </Text>
                <Text style={{ color: '#FC0F3B', fontSize: 35, fontWeight: 'bold', paddingLeft: 8, marginTop: -7 }}>
                    00 BPM
                </Text>
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

    menuBtn: {
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
