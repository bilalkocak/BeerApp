import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLOR_1 } from '../color';


const styles = StyleSheet.create({
  button: {
    color: COLOR_1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default function Button(props) {
  const {
    text, width, onPress, backgroundColor,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, { width, backgroundColor }]}>{text}</Text>
    </TouchableOpacity>

  );
}


Button.propTypes = {
  width: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
