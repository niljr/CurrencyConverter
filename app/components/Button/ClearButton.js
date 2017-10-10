import React, { PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.PropTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;