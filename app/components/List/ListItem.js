import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({ 
  onPress, 
  selected = false, 
  text, 
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground, 
  }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.PropTypes = {
  onPress: PropTypes.func,
  item: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;