import React from 'react'
import Home from './screens/Home'
import { StyleSheet, View,Text } from 'react-native'
import Styles from './screens/style'
import CurrencyList from './screens/CurrencyList'
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem } from './components/Container/List'
import Options from './screens/Options'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
  $border: '#E2E2E2',
  $white: '#FFFFFF',
  $darkText: '#343434',
});



// const styles = StyleSheet.create({
//     $primaryBlue: '#4F6D7A'
// })

// export default () => <Home />

const Index = () =>{
    return(
        // <View style={Styles.container}>
        //  <Home />
        // <CurrencyList />
        // <ListItem />
        <Options />
        //  </View>
        
    )
}

export default Index;

const style = StyleSheet.create({

})