import React from 'react';
import { Text, View, TouchableOpacity, Image, GestureResponderEvent } from 'react-native';
import style from './Style';

type ClearButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

const ClearButton: React.FC<ClearButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={style.container}  onPress={onPress}>
      <View style={style.wrapper}>
        <Image resizeMode='contain' style={style.icon} source={require('./images/icon.png')} />
        <Text  style={style.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClearButton;

































// import React from 'react';
// import PropTypes from 'prop-types';
// import {Text,View,TouchableOpacity,Image} from 'react-native'
// import style from './Style';

// const ClearButton =({text,onPress}) =>{
//     return(
//         <TouchableOpacity onPress={onPress}>
//             <View>
//                 <Image source={require('./images/logo.png')} />
//                 <Text>{text}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// ClearButton.prototype ={
//     text: PropTypes.string,
//     onPress: PropTypes.func
// }

// export default ClearButton