import React, {Component} from 'react';
import { Platform, ScrollView, StatusBar } from 'react-native';
import { ListItem} from '../components/Container/List';
import {Separator} from '../components/Container/List';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    handleThemesPress = () => {
        console.log('press themes')
    }
    handleSitePress = () => {
        console.log('press site')
    }
    render(){
        return(
          <ScrollView>
            <StatusBar translucent={false} barStyle='default' />
            <ListItem text='Themes' onPress={this.handleThemesPress}
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-arrow-forward-outline`} color={ICON_COLOR} size={ICON_SIZE} />
            } />
            <Separator />
            <ListItem text='Fixer.io' onPress={this.handleSitePress} 
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-link-outline`} color={ICON_COLOR} size={ICON_SIZE} />
             } />
             <Separator />
          </ScrollView>
        )
    }
}

export default Options;