// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { Card } from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
 
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: -50
            }}>
            Make It Easy !
          </Text>
          <View style={styles.container}>
            <View style={styles.card_template}>
                <Image
                  style={styles.card_image}
                  source={{uri: 'https://rtrs.co/wp-content/uploads/2021/02/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg'}}
               />
               <View style={styles.text_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'SettingsStack', { screen: 'Settings' }
              )}>
            <Text style={styles.card_title}>Orders</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.card_template}>
            <Image
                  style={styles.card_image2}
                  source={{uri: 'https://static.vecteezy.com/system/resources/previews/005/051/283/non_2x/construction-site-engineer-doing-routine-standup-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg'}}
               />
               <View style={styles.text_container}>
          <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Inventory')
            }>
            <Text>Inventory</Text>
          </TouchableOpacity>


          <View style={styles.container}>
            <View style={styles.card_template}>
            <Image
                  style={styles.card_image3}
                  source={{uri: 'https://img.freepik.com/premium-vector/construction-site-concept-with-compactor-material-equipment-illustration_338371-304.jpg?w=2000'}}
               />
               <View style={styles.text_container}>


          <TouchableOpacity
            style={styles.button3}
            onPress={
              () => navigation.navigate('About')
            }>
            <Text>About Us</Text>
          </TouchableOpacity>


        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'grey',
            marginBottom:-5,
            marginTop:10
          }}>
          P C I Constructions
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'grey',
            marginBottom:-10,
            marginTop:5
          }}>
         www.PCIconstructions.com
        </Text>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 260,
    height:40,
    marginTop: 16,
    borderRadius:10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 260,
    height:40,
    marginTop: 16,
    borderRadius:10,
    marginLeft:'50%'
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 260,
    height:40,
    marginTop: 16,
    borderRadius:10,
    marginLeft:'100%'
  },

  container:{
    flex:1,
    marginTop:-160,
    width:10,
    justifyContent:"center",
    alignItems: "center",
  },
   
  card_template:{
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },

  card_image: {
    width: 260,
    height: 100,
    borderRadius : 10
  },
  card_image2: {
    width: 260,
    height: 100,
  justifyContent:'center',
    borderRadius : 10,
    marginTop:240,
    marginLeft:'50%',
    
   
  },
  card_image3: {
    width: 260,
    height: 100,
  justifyContent:'center',
    borderRadius : 10,
    marginTop:240,
    marginLeft:'100%',
    
   
  },


});
export default HomeScreen;