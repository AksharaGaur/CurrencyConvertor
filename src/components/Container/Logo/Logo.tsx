import React,{Component} from 'react';
import {View,Text,Image, ImageBackground, SafeAreaView, Keyboard, Animated} from 'react-native';
import styles from './Styles';

class Logo extends Component<{},{}>{
    keyboardShowListener: any;
    keyboardHideListener: any;
    // containerImageWidth: Animated.Value;
    // imageWidth: Animated.Value;
    
    constructor(props:{}){
        super(props)
    //    this.containerImageWidth = new Animated.Value(styles.largeContainerSize) 
    //    this.imageWidth = new Animated.Value(styles.largeImageSize)

    }
// componentDidMount(): void {
//     this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow)
//     this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide)
// }

// componentWillUnmount(): void {
//     this.keyboardShowListener.remove()
//     this.keyboardHideListener.remove()
    
// }

// keyboardShow = () => {
//     console.log('keyboard did show')

// }
// keyboardHide = () =>{
//     console.log('keyboard is hide')

// }

    render(){
    
        
            return(
                <Animated.View  style={styles.container}>
                    <ImageBackground source={require('./images/background.png')} style={styles.imageContainer} resizeMode='contain'>
                        <Animated.Image style={styles.image} source={require('./images/logo.png')} resizeMode='contain' />
                    </ImageBackground>
        
                    <Text style={styles.text}>Currency Convertor</Text>
            
                </Animated.View>
            )
        
    }
}
export default Logo