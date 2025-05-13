import React, {Component} from 'react';
import {View, FlatList, Text, StatusBar, GestureResponderEvent} from 'react-native';
import currencies from '../components/Container/data/currencies';
import { ListItem, Separator } from '../components/Container/List';

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component{
    handlePress = () =>{
        console.log('row press')
    }
    render(){
    return(
        <View style={{flex:1,}}>
            <StatusBar barStyle='default' translucent={false} />
        <FlatList 
        data={currencies}
        renderItem={({item})=> <ListItem text={item} selected={item === TEMP_CURRENT_CURRENCY} 
        onPress={this.handlePress} customIcon={undefined} /> }
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator} />
        </View>
    )

}
}

export default CurrencyList;
