import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles =[styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
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
  iconBackground: PropTypes.string,
};

export default Icon;