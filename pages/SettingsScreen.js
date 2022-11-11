// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
 
const SettingsScreen = ({ route, navigation }) => {
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
              marginBottom: 16
            }}>
           
          </Text>
          <Image
                  style={styles.image5}
                  source={{uri: 'https://img.freepik.com/premium-vector/woman-boss-give-direction-employee-construction-site-boss-move-concept-colored-flat-graphic-vector-illustration-isolated_612079-1008.jpg'}}
               />
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Home')
            }>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Order')
            }>
            <Text>Make Your Order</Text>
          </TouchableOpacity>
         
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        P C I Constructions
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
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
    width: 300,
    marginTop: 16,
  },

  image5:{
    width:400,
    height:200,



  },
});
export default SettingsScreen;