import React, { Component, ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './Style';


type Props = {
  children: ReactNode;
};

class Container extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default Container;















// import PropTypes from 'prop-types';
// import { Children } from 'react';
// import {View} from 'react-native'


// const Container =(children) => {
//     <View>
//         {children}
//     </View>
// }

// Container.propTypes = {
//     children : PropTypes.element,
// }

// export default Container;

