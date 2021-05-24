import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';

const Locate = () => {
    const [currentPosition, setCurrentPosition] = useState({});
    const geo = Geolocation.setRNConfiguration({ authorizationLevel: 'always' });

    const {width, height} = Dimensions.get('window');

    const SCREEN_HEIGHT = height;
    const SCREEN_WIDTH = width;
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const handleOnLocate = () => {
        Geolocation.getCurrentPosition(
            position => {
              const initialPosition = JSON.stringify(position.coords);
              setCurrentPosition(position.coords);
              console.log(initialPosition);
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000},
          );
        console.log('locate');
    };
    //set current position
    useEffect(() => {

    });
    return (
        <View style={styles.container}>
        <View style={styles.mapContainer}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            />
        </View>
            <View style={styles.btnContainer}>
                <Button title="Localizar" onPress={handleOnLocate} />
            </View>
      </View>
    );
};

const styles =  StyleSheet.create({
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    btnContainer: {
        top: '35%',
        marginHorizontal: 20,
    },
   });

export default Locate;
