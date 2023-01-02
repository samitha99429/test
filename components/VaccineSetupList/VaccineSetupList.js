import React from "react";
import {
  Dimensions,
  PixelRatio,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import VaccineCard from "../VaccineCard/VaccineCard";
import VaccineCircle from "../VaccineCircle/VaccineCircle";
import VaccineForm from "../VaccineForm/VaccineForm";

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

function VaccineSetupList(props) {
  const vaccineList = props.vaccineList;

  return (
    <View>
      <ScrollView>
        <View style={styles.cardListView}>
          {vaccineList.map((vaccine, index) => {
            return (
              <View style={styles.cardRowView} key={index}>
                <VaccineCircle modelTitle={<VaccineForm></VaccineForm>}/>
                <VaccineCard
                  title={vaccine.title}
                  date={vaccine.date}
                  time={vaccine.time}
                ></VaccineCard>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardRowView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: setWidthSize(250),
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
    margin: 10,
  },
});

export default VaccineSetupList;