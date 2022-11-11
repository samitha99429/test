import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TextInput ,TouchableOpacity, Button  } from 'react-native';
const  AboutScreen=()=> {
  return (
    <View>
        <Text style={styles.headline}>
            PCI Constructions
        </Text>
        <Text style={styles.content}>
        We use heavy-gauge, hot-dipped, G-90 galvanized steel in our siding. 
        It’s thicker and stronger than our competitors’ steel siding, and superior to nearly all other siding materials. It won’t crack, warp, or peel. Steel also minimizes expansion and contraction with diverse temperature changes. And our siding doesn’t need to be painted, scraped, or replaced like vinyl, fiberboard cement, and wood siding products. ABC Seamless siding is completely customizable and comes in an array of colors. Plus, we’ve never discontinued a style or color, so you can always reorder your siding for future projects. We even have steel log siding, which can give your home a rustic look without the maintenance of wood logs.
        </Text>

        <Image
                  style={styles.card_image}
                  source={{uri: 'https://st3.depositphotos.com/1008336/12587/v/950/depositphotos_125872636-stock-illustration-construction-site-with-workers-and.jpg'}}
               />
    </View>
  )
}

const styles=StyleSheet.create({


    card_image:{
        width: 460,
        height: 300,
        marginTop:50,
        borderRadius : 10 
    },

    headline:{
        fontSize:25,
        fontFamily:'Academy Engraved LET',
        marginTop:10,

        paddingLeft:'30%'

    },

    content:{
    
     paddingLeft:15
    }

})

export default AboutScreen;
