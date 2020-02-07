import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


export default function Button(props) {
    const {text, width, onPress} = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, {width}]}>{text}</Text>
        </TouchableOpacity>

    );
};


Button.propTypes = {
    width: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
