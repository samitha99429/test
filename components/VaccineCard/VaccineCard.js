import React from 'react';
import {Dimensions, Image, PixelRatio, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import calenderIcon from '../../assets/calender.png';
import clockIcon from '../../assets/clock.png';


const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

//responsive method
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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

function VaccineCard(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.textTile}>{props.title}</Text>
                </View>
                <View style={styles.row}>
                    <Image source={calenderIcon}></Image>
                    <Text style={styles.textContent}>{props.date}</Text>
                </View>
                <View style={styles.row}>
                    <Image source={clockIcon}></Image>
                    <Text style={styles.textContent}>{props.time}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: setWidthSize(20),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: setWidthSize(200),
        height: setHeightSize(120),
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#848484',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 20.0,
        elevation: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 'auto',
        height: '30%',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textTile: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    textContent: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'normal',
        textAlign: 'left',
        marginLeft: 30,
    }
});

export default VaccineCard;