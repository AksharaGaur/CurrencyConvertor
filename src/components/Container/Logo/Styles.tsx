import { StyleSheet , Dimensions} from "react-native";

const imageWidth = Dimensions.get('window').width/2

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // marginTop:270,
        justifyContent:'center',
        
       
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        width: imageWidth,
        height: imageWidth,
        // marginBottom:20,
        
       // backgroundColor:'grey'
    },
    image:{
      width:imageWidth/2
    },
    text:{
         fontSize:30,
         fontWeight:'bold',
         color:'white',
         letterSpacing: -0.5
    }

});

export default styles