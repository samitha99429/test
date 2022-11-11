import { View, Text ,StyleSheet ,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text ,type="PRIMARY",bgcolor,fgcolor}) => {
  return (
    <Pressable onPress={onPress}style={[
        styles.container ,
        styles[`container_${type}`] ,
        bgcolor ?{backgroundColor: bgcolor}:{}, 
        ]}>
      <Text style={[
        styles.text,
         styles[`text_${type}`],
         fgcolor ?{color: fgcolor}:{},
         ]}>{text}</Text>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
       
        width:'85%',
        padding:15,
        alignItems:'center',
        borderRadius:10,
        height: 48,
        borderColor:'#e8e8e8',
     borderWidth:1,
      marginTop:-10,
      margin: 30, 
     justifyContent: 'center', 
     paddingLeft: 10 ,
     marginVertical:25
   
        
    },


    container_PRIMARY:{

        backgroundColor:'conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)',

    },

    container_TERTIARY:{

    },

    text_TERTIARY:{

        color:'grey',

    },

    text:{

        fontWeight:'bold',
        color:'white'

    },
})
export default CustomButton