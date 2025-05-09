import React from 'react';
import {View, FlatList, Text, StatusBar} from 'react-native';
import currencies from '../components/Container/data/currencies';

const CurrencyList = () =>{
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <StatusBar barStyle='default' translucent={false} />
        <FlatList 
        data={currencies}
        renderItem={({item})=> <Text>{item}</Text>}
        keyExtractor={item => item} />
        </View>
    )

}

export default CurrencyList;
