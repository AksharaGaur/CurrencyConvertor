import React, {Component} from 'react';
import {View,Text, StyleSheet,StatusBar, KeyboardAvoidingView} from 'react-native'
import Container from '../components/Container/Container';
import Logo from '../components/Container/Logo/Logo';
import Styles from './style';
import ClearButton from '../components/Container/Button/ClearButton';
import InputWithButton from '../components/Container/TextInput/InputWithButton';
import { LastConvertor } from '../components/Container/Text';
import Header from '../components/Container/Header/Header'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Temp_Base_Currency = 'USD';
const Temp_Quote_Currency = 'GBP';
const Temp_Base_Price = '100'
const Temp_Quote_Price = '79.74';
const Temp_Conversion_Rate= 0.7974;
const Temp_Conversion_Date= new Date();


type RootStackParamList = {
    Home: undefined;
    CurrencyList: undefined;
    Options: undefined;
    // add other screens here
  };
  
  type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  };




//class Home extends Component<{},{}> {
class Home extends Component<Props> {
   
      
    // constructor(props:{}){
    //   super(props)
    //}

    handleSwapCurrency =()=>{
        console.log('Press swap currency')
    }
    handlePressBaseCurrency = ()=>{
        //console.log('Press base')
        this.props.navigation.navigate('CurrencyList')
    }

    handlePressQuoteCurrency =()=>{
        console.log('Press Quote')
    }

    handleTextChange=(text: any)=>{
    console.log('change text',text)
    }
    
    handleOptionsPress =()=>{
      // console.log('handle options press')
      this.props.navigation.navigate('Options')
    }
    
//  const Home = () =>{
     render(){
    return(
    <View style={Styles.container}>
        

    <Container >
        <StatusBar translucent={false} barStyle={'light-content'} />
        <Header onPress={this.handleOptionsPress} />
        
        <View />
       
        <Logo />
       
        <InputWithButton buttonText={Temp_Base_Currency}
            onPress={this.handlePressBaseCurrency}
            editable = {true} 
            defaultValue={Temp_Base_Price}
            keyboardType='numeric'
            onChangeText={this.handleTextChange} />

        <InputWithButton buttonText={Temp_Quote_Currency}
                defaultValue={Temp_Quote_Price}
                onPress={this.handlePressQuoteCurrency}
                editable={false} keyboardType={undefined}
                value={Temp_Quote_Price} />

        <LastConvertor 
                    base={Temp_Base_Currency}
                    quote={Temp_Quote_Currency}
                    date={Temp_Conversion_Date}
                    conversionRate={Temp_Conversion_Rate} />
        <View style={Styles.reverseButton}>
        <ClearButton 
        text= 'Reverse Currencies' 
        onPress={this.handleSwapCurrency}/>
        </View>
        
        
    </Container>
    </View>
    )
        
}
}

export default Home;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor: 'grey'
    }
})







// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to Home Screen!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 24,
//     color: 'black',
//   },
// });

// export default Home;
