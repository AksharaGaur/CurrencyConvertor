import React,{Component} from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import {ListItem, Separator} from '../components/Container/List'

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});


class Themes extends Component{
 handleThemePress =($blue: any)=> {
        console.log('Press Theme')
    }
    render(){
        return(
          <ScrollView>
            <StatusBar translucent={false} barStyle='default'  />
            <ListItem text='Blue'
            onPress={() => this.handleThemePress(styles.$blue)} selected checkmark={false} iconBackground={styles.$blue} customIcon={undefined} />
            <Separator />
           
              <ListItem text='orange'
            onPress={() => this.handleThemePress(styles.$orange)} selected checkmark={false} iconBackground={styles.$orange} customIcon={undefined} />
              <ListItem text='green'
            onPress={() => this.handleThemePress(styles.$green)} selected checkmark={false} iconBackground={styles.$green} customIcon={undefined} />
              <ListItem text='purple'
            onPress={() => this.handleThemePress(styles.$purple)} selected checkmark={false} iconBackground={styles.$purple} customIcon={undefined} />
          </ScrollView>
        )
    }

}

export default Themes;

