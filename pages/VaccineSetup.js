import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, setState } from "react";
  import SvgCurve from "../components/SvgCurve";
  import { ScrollView } from "react-native-gesture-handler";
  import VaccineSetupList from "../components/VaccineSetupList/VaccineSetupList";
  
  const VaccineSetup = () => {
    const vaccineList = [
      {
        title: "Hepatitis B",
        date: "09.08.2022",
        time: "9.00PM",
      },
      {
        title: "Rotavirus",
        date: "10.09.2022",
        time: "7897-89-9",
      },
      {
        title: "Haemophilus B",
        date: "09.02.2023",
        time: "7897-89-9",
      },
    ];
  
    return (
      <View>
        <ScrollView>
          <SvgCurve />
  
          <Text style={styles.title}>vaccination Setup</Text>
          <VaccineSetupList vaccineList={vaccineList} />
  
          <View style={styles.container}></View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      color: "#051C60",
      fontSize: 24,
      fontWeight: "bold",
      margin: 10,
      alignSelf: "center",
    },
  
    container: {
      paddingTop: 23,
    },
  
    cover: {
      marginTop: 50,
    },
  
    input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 14,
    },
    submitButton: {
      backgroundColor:
        "linear-gradient(63.92deg, #005AA7 -82.69%, rgba(112, 198, 247, 0.874995) -1.22%, rgba(35, 124, 192, 0.961037) 101.88%, rgba(255, 253, 228, 0.4) 101.9%, rgba(186, 226, 237, 0.815538) 101.9%, rgba(186, 226, 237, 0.815538) 101.9%)",
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius: 14,
    },
    submitButtonText: {
      textAlign: "center",
      color: "white",
      // fontWeight:"bold",
      fontSize: 18,
    },
    output: {
      textAlign: "center",
      fontSize: 30,
    },
    title: {
      paddingTop: 30,
      paddingBottom: 10,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
    resultText: {
      paddingTop: 20,
      paddingBottom: 10,
      textAlign: "center",
      fontSize: 30,
      color: "blue",
    },
    label: {
      marginLeft: 15,
    },
  });
  export default VaccineSetup;