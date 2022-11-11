import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const CustomerInputs = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry}
      style={styles.input}/>
    </View>
  );
};

const styles = StyleSheet.create({

  container:{

    width:'85%',
    marginLeft:30,
    backgroundColor:'white',
    height: 40,
    borderRadius: 10,
     margin: 20, 
     justifyContent: 'center', 
     paddingLeft: 10 ,
    
     borderColor:'#e8e8e8',
     borderWidth:1

  },
})

export default CustomerInputs;