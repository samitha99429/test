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
} from "react-native";
import vaccineLogo from "./../../assets/vaccine-icon.png";
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

const VaccineCircle = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.modelTitle}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.circle}>
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(true)}
        >
          <Image source={vaccineLogo} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default VaccineCircle;