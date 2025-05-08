import React from 'react';
import {View,Text,Image, ImageBackground, SafeAreaView} from 'react-native';
import styles from './Styles';

const Logo = () =>{
    return(
        <View  style={styles.container}>
        
            <ImageBackground source={require('./images/background.png')} style={styles.imageContainer} resizeMode='contain'>
                <Image style={styles.image} source={require('./images/logo.png')} resizeMode='contain' />
            </ImageBackground>

            <Text style={styles.text}>Currency Convertor</Text>
    
        </View>
    )
}

export default Logo