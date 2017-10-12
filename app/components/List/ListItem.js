import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({ onPress, selected = false, text, checkmark = true, visible = true }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

ListItem.PropTypes = {
  onPress: PropTypes.func,
  item: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default ListItem;