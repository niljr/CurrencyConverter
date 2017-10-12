import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles =[styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  return(
    <View style={iconStyles}>
      {checkmark
        ? <Image
            source={(require('./images/check.png'))}
            resizeMode="contain"
            style={styles.checkIcon}
          />
        :
          null}
    </View>
  );
};

Icon.PropTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;