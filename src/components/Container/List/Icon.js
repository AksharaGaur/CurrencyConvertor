import PropTypes from 'prop-types';
import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ visible, checkmark, iconBackground }) => {
  const iconStyle = [styles.iconContainer];
  if (iconBackground) {
    iconStyle.push({ backgroundColor: iconBackground });
  }
  if (visible) {
    const iconStyles = [styles.icon];
    if (visible) {
      iconStyles.push(styles.iconVisible);
    }

    return (
      <View style={iconStyles}>
        {checkmark
          ? (
            <Image
              source={require('./image/check.png')}
              style={styles.checkIcon}
              resizeMode="contain"
            />
          )
          : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string
};

export default Icon;