
import React from 'react';
import {View,} from 'react-native';
import MainApp from './src/MainApp'
import Styles from './src/screens/style';



const App=()=> {
  return (
    <View style={Styles.container}>
      <MainApp />
    </View>
    
  );
}

export default App;
