import React from 'react'
import Home from './screens/Home'
// import { StyleSheet, View,Text } from 'react-native'
// import Styles from './screens/style'
import CurrencyList from './screens/CurrencyList'
import EStyleSheet from 'react-native-extended-stylesheet';
//import { ListItem } from './components/Container/List'
import Options from './screens/Options'
// import { Provider, connect } from 'react-redux'
// import {addNavigationHelpers} from '@react-navigation/native'

// import Navigator from './components/Container/config/routes'
//import AlertProvider from './components/AlertProvider'
//import store from './components/Container/config/store'
import AppNavigator from './src/navigation/AppNavigator';
//import { NavigationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Home from './screens/Home'
// import CurrencyList from './screens/CurrencyList'
// import Options from './screens/Options'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
  $border: '#E2E2E2',
  $white: '#FFFFFF',
  $darkText: '#343434',
});


//import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />

}




// const App = ({ dispatch, nav}) =>{
//   return(
//   <Navigator 
//     navigation ={addNavigationHelpers ({
//       dispatch,
//       state:nav
//     })} />
//   )
// }

// const mapStateToProps = state =>({
//   nav:state.nav
// })

// const AppWithNavigation = connect(mapStateToProps)(App)

// export default () =>{
//     return(
//         // <View style={Styles.container}>
//         //  <Home />
//         // <CurrencyList />
//         // <ListItem />
//         // <Options />
        
//         //  </View>

//         <Provider store={store}>
        
//             <AppWithNavigation />
          

//         </Provider>
        
//     )
// }

