import { StyleSheet , Dimensions} from "react-native";

const imageWidth = Dimensions.get('window').width/2
const largeImageSize=imageWidth/2
const largeContainerSize=imageWidth
const smallContainerSize= imageWidth/2
const smallImageSize = imageWidth /4

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // marginTop:270,
        justifyContent:'center',
        marginTop:220
        
       
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        width: largeContainerSize,
        height: largeContainerSize,
        // marginBottom:20,
        
       // backgroundColor:'grey'
    },
    image:{
      width:largeImageSize
    },
    text:{
         fontSize:30,
         fontWeight:'bold',
         color:'white',
         letterSpacing: -0.5,
         marginTop:20
    }

});

export default styles