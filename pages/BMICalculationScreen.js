import { View, Text ,StyleSheet ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import React, {useState ,setState} from 'react'
import SvgCurve from '../components/SvgCurve'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const BMICalculationScreen = () => {



     const [height,setHeight] = useState('');
     const [weight,setWeight] = useState('');
     const [bmi,setBmi] =useState('');
     const [BmiResult,setBMIResult]=useState('');
     const navigation = useNavigation();

     const nextPagePressed2 =()=>{
       
        navigation.navigate('AdminHome');
        
        
      };


     handleHeight = (text) => {
        setHeight({ height: text })
     }
     handleWeight = (text) => {
        setWeight({ weight: text })
     }
     calculate = (height, weight) => {
        //calculation
        var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
        result = result.toFixed(2);
        //display result
        setBmi({ bmi: result })
        if(result<18.5){
           setBMIResult({BmiResult:'Underweight'})
        }
        else if(result>=18.5&&result<25){
           setBMIResult({BmiResult:'Normal weight'})
        }
        else if(result>=25&&result<30){
           setBMIResult({BmiResult:'Overweight'})
        }
        else if(result>=30){
           setBMIResult({BmiResult:'Obese'})
        }
        else{
           alert('Incorrect Input!');
           setBMIResult({BmiResult:''})
        }
     }
  return (
   
    <View>
        

       
         <Text style={styles.title}>BMI Calculator</Text>
         
<TouchableOpacity style={styles.backnav}
            
            onPress={nextPagePressed2}>
         <AntDesign name="leftcircle" size={30} color="conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)" />
            <Text style={styles.buttonc}></Text>
        </TouchableOpacity>
         <ImageBackground
        source={require("../assets/baby.jpg")}
        style={ styles.cover}
      >
         
         <View style = {styles.container}>         
            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (Cm)"
               keyboardType='number-pad'
               autoCapitalize = "none"
               onChangeText = {handleHeight}/>
<Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (Kg)"
               keyboardType='number-pad'
               autoCapitalize = "none"
               onChangeText = {handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>calculate(height,weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{bmi}</Text>
            <Text style = {styles.resultText}>{BmiResult}</Text>
</View>
</ImageBackground>

    </View>
  )
}

const styles=StyleSheet.create({

    title:{
        color:'#051C60',
        fontSize:24,
        fontWeight:'bold',
        margin:10,
        alignSelf:'center',
        top:400
    


      
        
    },

    container: {
        paddingTop: 100,
        
     },
  
     cover:{
  
        marginTop:30,
      
  
     },
  
     input: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 14,
     },
     submitButton: {
        backgroundColor: 'linear-gradient(63.92deg, #005AA7 -82.69%, rgba(112, 198, 247, 0.874995) -1.22%, rgba(35, 124, 192, 0.961037) 101.88%, rgba(255, 253, 228, 0.4) 101.9%, rgba(186, 226, 237, 0.815538) 101.9%, rgba(186, 226, 237, 0.815538) 101.9%)',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius:14,
     },
     submitButtonText:{
        textAlign: "center",
        color: 'white',
       // fontWeight:"bold",
        fontSize: 18,
     },
     output:{
        textAlign: "center",
        fontSize: 30,
     },
     title:{
        paddingTop:70,
        paddingBottom:10,
        textAlign: "center",
        fontSize: 30,
        fontWeight:"bold",
     },
     resultText:{
        paddingTop:20,
        paddingBottom:10,
        textAlign: "center",
        fontSize: 30,
        color: 'blue'
     },
     label:{
        marginLeft: 15,
     },
     backnav:{
        top:5,
        paddingLeft:10
     }

})
export default BMICalculationScreen
