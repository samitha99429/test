// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TextInput ,TouchableOpacity, Button  } from 'react-native';

const ProfileScreen = () => {

  const logo = {
    uri: 'https://thumbs.dreamstime.com/b/construction-engineer-avatar-profile-vector-illustration-graphic-design-construction-engineer-avatar-profile-colorful-142450438.jpg',
    width: 94,
    height: 94,
    marginLeft:100,

  };
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>

            <View style={styles.formcard}>
            <Image
                  style={styles.image5}
                  source={{uri: 'https://thumbs.dreamstime.com/b/construction-engineer-avatar-profile-vector-illustration-graphic-design-construction-engineer-avatar-profile-colorful-142450438.jpg'}}
               />
              <View style={styles.inputcontainer}>
                <View style={styles.setTextCenter }>
                <Text style={styles.text1}> Name :</Text>
                  <Text style={styles.text2}>      sahanlak97@gmail.com</Text>
                </View>
                <View style={styles.inputcontainer2}>
                <Text style={styles.text1}>Email :</Text>
                  <Text style={styles.text3}>pciconstructions@gmail.com</Text>
                </View>

                <View style={styles.inputcontainer3}>
                <Text style={styles.text1}>Phone Number :</Text>
                  <Text style={styles.text3}>               +94 76 466 8388</Text>
                </View>
              
                <View style={styles.inputcontainer4}>
                <Text style={styles.text1}>                           :</Text>
                  <Text style={styles.text3}>               +94 76 466 8388</Text>
                </View>
               

              </View>

              <TouchableOpacity
            style={styles.button2}>
            <Text>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button3}>
            <Text>LogOut</Text>
          </TouchableOpacity>

            </View>
          </View>
          
          
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  formcard: {
    position: 'absolute',
    width: 358,
    height: 500,
    left: 16,
    top: 21,
    backgroundColor: '#FFFFFF',
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
  },

  text1: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16
  },
  text2: {
    marginLeft: 80,
    marginTop: -17
  },
  text3: {
    marginLeft: 80,
    marginTop: -16
  },


  inputcontainer: {
    position: 'absolute',
    width: 330,
    height: 50,
    left: 16,
    top: 150,
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#dfedf5',
    borderRadius: 15,

  },
  inputcontainer2: {
    position: 'absolute',
    width: 330,
    height: 50,
    left: 3,
    top: 60,
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#dfedf5',
    borderRadius: 15,

  },
  setTextCenter: {
    display: 'flex',
    justifyContent: "center",
    // alignItems: ''
  },
  inputcontainer3: {
    position: 'absolute',
    width: 330,
    height: 50,
    left: 3,
    top: 120,
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#dfedf5',
    borderRadius: 15,

  },

  inputcontainer4: {
    position: 'absolute',
    width: 330,
    height: 50,
    left: 3,
    top: 180,
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#dfedf5',
    borderRadius: 15,

  },
  image5:{
    width:100,
    height:100,
    marginLeft:120


  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 130,
    height:40,
    marginTop: 330,
    marginBottom:50,
    borderRadius:10,
    marginLeft:'5%'
  },
  button3:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 130,
    height:40,
    marginTop: -90,
    marginBottom:50,
    borderRadius:10,
    marginLeft:'50%'
  },


});
export default ProfileScreen;