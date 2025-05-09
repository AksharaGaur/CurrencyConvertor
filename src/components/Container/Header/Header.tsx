import React from 'react';
import {View, TouchableOpacity, Image,GestureResponderEvent} from 'react-native';
import Style from './Style';

type HeaderProps ={
    onPress: (event: GestureResponderEvent) => void;
}

const Header: React.FC<HeaderProps> = ({onPress}) => {
    return(
        <View style={Style.container}>
        <TouchableOpacity style={Style.botton} onPress={onPress}>
            <Image resizeMode='contain' style={Style.icon} source={require('./gear/gear.png')}/>
        </TouchableOpacity>
    </View>

    )
}   
export default Header;