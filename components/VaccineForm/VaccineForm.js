import React, { useState } from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

//responsive method
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scale = width / 320;
const heightScale = height / 600;

/****responsive height method*****/

function setHeightSize(size) {
  const newSize = size * heightScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/*****responsive Width method*****/

function setWidthSize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const circleColor =
  "conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)";

const VaccineForm = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <TextInput style={styles.inputStyles} placeholder="Vaccine Name" placeholderTextColor="#000"/>
        </View>
        <View style={styles.row}>
          <TextInput style={styles.inputStyles}  placeholder="Vaccine Date" placeholderTextColor="#000"/>
        </View>
        <View style={styles.row}>
          <TextInput style={styles.inputStyles}  placeholder="Vaccine Time" placeholderTextColor="#000"/>
        </View>
        <View style={styles.rowLast}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttoncolor}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    padding: 10,
    textcolor: "black",
    width: setWidthSize(100),
    height: 40,
    borderRadius: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: setWidthSize(20),
  },

  circle: {
    width: setWidthSize(55),
    height: setWidthSize(55),
    borderRadius: setWidthSize(200) / 2,
    backgroundColor: circleColor,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: circleColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: setWidthSize(200),
    height: setHeightSize(120),
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#848484",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 20.0,
    elevation: 5,
  },
  rowLast: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "auto",
    height: "30%",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  textTile: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },
  textContent: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 30,
  },
  button2: {
    alignItems: "center",
    backgroundColor:
      "conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)",
    padding: 10,
    textcolor: "white",
    width: 80,
    height: 40,
    marginBottom: -50,
    borderRadius: 10,
    marginLeft: "30%",
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  },
});

export default VaccineForm;