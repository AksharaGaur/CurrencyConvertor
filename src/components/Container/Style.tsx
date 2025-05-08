import { StyleSheet, Dimensions } from "react-native";
const imageWidth = Dimensions.get('window').width/2
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // textAlign:'center',
        // backgroundColor:'grey'
     },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        width: imageWidth,
        height: imageWidth,
        // backgroundColor:'blue'

    }
})

export default styles;