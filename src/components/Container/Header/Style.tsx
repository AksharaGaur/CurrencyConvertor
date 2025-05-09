import {StatusBar, StyleSheet, Platform} from 'react-native'

const Style = StyleSheet.create({
   container:{
    position:'absolute',
    left:0,
    right:0,
    top:0,
    paddingTop: Platform.select({
        android: StatusBar.currentHeight,
        ios: 0, 
    }),
   },
   botton:{
    alignSelf:'flex-end',
    paddingVertical:8,
    paddingHorizontal:22
   },
   icon:{
    width:20
   }
})

export default Style;