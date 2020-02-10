import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import {COLOR_3} from '../color';


export default function SplashScreen(props) {

    const {navigate} = props.navigation;

    useEffect(() => {
        setTimeout(() => {
            navigate('Home');
        }, 1500);
    }, []);

    return (
        <View style={styles.splashScreenContainer}>
            <Image source={require('../assets/beer.png')}/>
            <Text style={styles.splashScreenText}>BeerApp</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    splashScreenContainer: {
        flex: 1,
        backgroundColor: COLOR_3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashScreenText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 40,
    },
});
