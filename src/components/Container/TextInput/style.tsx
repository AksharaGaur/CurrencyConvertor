import { StyleSheet } from "react-native";


const Input_Height = 48;
const Border_Radius = 4

// const buttonBackgroundColorBase:'white';
// const buttonBackgoundColorModifier: 0.1

const style = StyleSheet.create({
  

    container:{
        backgroundColor:'white',
        width:'90%',
        height:Input_Height,
        borderRadius:Border_Radius,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:11,
        marginLeft:18,
        justifyContent:'center',
        // flexBasis:'auto'
        
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:Input_Height,
        backgroundColor:'white',
        borderTopLeftRadius:Border_Radius,
        borderBottomLeftRadius:Border_Radius,
        
        
    },
    buttonText:{
        fontWeight:'600',
        fontSize:25,
        paddingHorizontal:16,
        color:'#4f6d7a'

    },
    containerDisable:{
      backgroundColor:'lightgrey'
    },
    input:{
        flex:1,
        fontSize:18,
        paddingHorizontal:8,
        height:Input_Height,
        color:'#797979'
    },
    border:{
        height:Input_Height,
        width:StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2'

    }

})

export default style;