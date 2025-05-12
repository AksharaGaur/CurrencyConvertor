import React from 'react';
import { Text, View, TouchableHighlight, Image, GestureResponderEvent,TextInput ,TextInputProps} from 'react-native';
import style from './style'


type InputWithButtonProps = {
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
  editable?:boolean;
  defaultValue?:string;
  keyboardType:any
} & TextInputProps; 

const InputWithButton: React.FC<InputWithButtonProps> = (props) => {
    const {buttonText, onPress, editable=true, ...rest} = props
    const underlayColor = 'blue'


    const containerStyles: (typeof style.container)[] = [style.container];
if (!editable) {
  containerStyles.push(style.containerDisable as typeof style.container);
}


    

  return (
    <View style={style.container}>
    <TouchableHighlight underlayColor={underlayColor}
     style={style.buttonContainer} onPress={onPress} >
       <Text style={style.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={style.border} />
    <TextInput style={style.input} underlineColorAndroid='transparent' {...props} />
    </View>
  );
};

export default InputWithButton;
