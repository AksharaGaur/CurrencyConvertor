
import React from 'react';
import {Text,View,} from 'react-native';
import Index from './src/Index'
import Styles from './src/screens/style';



const App=()=> {
  return (
    <View style={Styles.container}>
       <Index />
    </View>
    
  );
}

export default App;
