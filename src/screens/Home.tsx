import React, {Component} from 'react';
import {View,Text, StyleSheet,StatusBar} from 'react-native'
import Container from '../components/Container/Container';
import Logo from '../components/Container/Logo/Logo';
import Styles from './style';
import ClearButton from '../components/Container/Button/ClearButton';
import InputWithButton from '../components/Container/TextInput/InputWithButton';
import { LastConvertor } from '../components/Container/Text';

const Temp_Base_Currency = 'USD';
const Temp_Quote_Currency = 'GBP';
const Temp_Base_Price = '100'
const Temp_Quote_Price = '79.74';
const Temp_Conversion_Rate= 0.7974;
const Temp_Conversion_Date= new Date()





class Home extends Component<{},{}> {
    constructor(props:{}){
      super(props)
    

    }
    handleSwapCurrency =()=>{
        console.log('Press swap currency')
    }
    handlePressBaseCurrency = ()=>{
        console.log('Press base')
    }

    handlePressQuoteCurrency =()=>{
        console.log('Press Quote')
    }

    handleTextChange=(text: any)=>{
    console.log('change text',text)
    }
    
    
// const Home = () =>{
     render(){
    return(
    <View style={Styles.container}>

    <Container >
        <StatusBar translucent={false} barStyle={'light-content'} />
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
                editable={false} keyboardType={undefined}/>

        <LastConvertor 
                    base={Temp_Base_Currency}
                    quote={Temp_Quote_Currency}
                    date={Temp_Conversion_Date}
                    conversionRate={Temp_Conversion_Rate} />
        <ClearButton 
        text= 'Reverse Currency' 
        onPress={this.handleSwapCurrency}/>
        
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
