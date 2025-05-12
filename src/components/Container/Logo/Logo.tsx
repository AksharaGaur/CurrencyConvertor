import React,{Component} from 'react';
import {View,Text,Image, ImageBackground, SafeAreaView, Keyboard, Animated,Platform} from 'react-native';
import styles,{largeContainerSize,smallContainerSize, largeImageSize,smallImageSize} from './Styles';


  

class Logo extends Component<{},{}>{
    keyboardShowListener: any;
    keyboardHideListener: any;
    containerImageWidth: Animated.Value;
    imageWidth: Animated.Value;
   
    constructor(props:{}){
        super(props)
       this.containerImageWidth = new Animated.Value(largeContainerSize) 
       this.imageWidth = new Animated.Value(largeImageSize)

    }
componentDidMount(): void {
//     let showListener = 'keyboardWillShow'
//     let hideListener = 'keyboardWillHide'
//     if(Platform.OS === 'android'){
//         showListener = 'keyboardDidShow'
//         hideListener = 'keyboardDidHide'
//     }
//     this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
//     this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)


    const showListener = (Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow') as 'keyboardWillShow' | 'keyboardDidShow';
    const hideListener = (Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide') as 'keyboardWillHide' | 'keyboardDidHide';

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);

}

componentWillUnmount(): void {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
    
}

keyboardShow = () => {
    Animated.parallel([
    Animated.timing(this.containerImageWidth,{
        toValue:smallContainerSize,
        useNativeDriver:false,
        // duration: ANIMATION_DURATION
    }),
    //console.log('keyboard did show'),
    Animated.timing(this.imageWidth,{
        toValue:smallImageSize,
        useNativeDriver:false,
        // duration: ANIMATION_DURATION
    }), 
]).start();
}
keyboardHide = () =>{
    //console.log('keyboard is hide')
    Animated.parallel([
        Animated.timing(this.containerImageWidth,{
            toValue:largeContainerSize,
            useNativeDriver:false,
            // duration: ANIMATION_DURATION
        }),
        //console.log('keyboard did show'),
        Animated.timing(this.imageWidth,{
            toValue:largeImageSize,
            useNativeDriver:false,
            // duration: ANIMATION_DURATION
        }), 
    ]).start();

}

    render(){
        // const containerImageStyle = [
        //     styles.imageContainer,
        //     {width: this.containerImageWidth, height: this.containerImageWidth}

        // ]
        // const ImageStyle = [
        //     styles.image,
        //     {width: this.imageWidth}

        // ]
    
        
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

function start() {
    throw new Error('Function not implemented.');
}
