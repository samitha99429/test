import React from 'react'
import { View, Text, SafeAreaView ,StyleSheet,TextInput ,Image, TouchableOpacity,Alert , ScrollView} from 'react-native';

const  InventoryScreen=({navigation })=> {

  const logo = {
    uri: 'https://us.123rf.com/450wm/onyxprj/onyxprj1912/onyxprj191200265/134950240-construction-material-collection-equipment-for-builders-cement-sand-stones-pile-gypsum-block-bricks-.jpg?ver=6',
    width: 64,
    height: 64,
  
  };




  return (
    /*<ScrollView>
      
      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:21,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>Scroll </Text>
      <Image source={logo} />
      </View>
      
      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:150,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>scoll </Text>
      <Image source={logo} />
      </View>

      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:280,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>scoll </Text>
      <Image source={logo} />
      </View>

      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:410,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>scoll </Text>
      <Image source={logo} />
      </View>
      
      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:540,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>scoll </Text>
      <Image source={logo} />
      </View>

      <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:670,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      <Text style={{ fontSize: 16 }}>scoll </Text>
      <Image source={logo} />
      </View>

    
  
  </ScrollView>*/

  <ScrollView>
       <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:21,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
       
       <Text style={styles.head}>ID001</Text>
       <Text style={styles.headline}>blocks</Text>
       <Image style={styles.image1} source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/01/10</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>
       
      
    </View>
   
    <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:140,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
       <Text style={styles.head}>ID002</Text>
       <Text style={styles.headline}>Sand</Text>
       <Image style={styles.image1} source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/02/12</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>

      
    </View>

    <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:260,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
       <Text style={styles.head}>ID003</Text>
       <Text style={styles.headline}>Metals</Text>
       <Image style={styles.image1} source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/05/11</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>
     
    </View>

    <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:380,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
       <Text style={styles.head}>ID004</Text>
       <Text style={styles.headline}>Cement</Text>
       <Image  style={styles.image1}source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/10/22</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>
      
    </View>
     
    <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:500,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
       <Text style={styles.head}>ID005</Text>
       <Text style={styles.headline}>Sand</Text>
       <Image style={styles.image1} source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/12/12</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>
      
    </View>

      
    <View style={{
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:630,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    }
    }>
      
       <Text style={styles.head}>ID006</Text>
       <Text style={styles.headline}>Sand</Text>
       <Image style={styles.image1} source={logo} />
       <Text style={styles.headline2}>Purchased date:2022/12/12</Text>
       <TouchableOpacity
            style={styles.button2}
            onPress={
              () => navigation.navigate('Invent')
            }>
            <Text>More</Text>
          </TouchableOpacity>
      
    </View>

    



  </ScrollView>
  );
}
const styles = StyleSheet.create({

  formcard: {
  position: 'absolute',
  width:359,
  height:100,
  left:16,
  top:21,
  backgroundColor:'#FFFFFF',
  boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  borderRadius:15,
    },
    
  formcard1: {
    position: 'absolute',
    width:359,
    height:100,
    left:16,
    top:150,
    backgroundColor:'#FFFFFF',
    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    borderRadius:15,
      },

      formcard2: {
        position: 'absolute',
        width:359,
        height:100,
        left:16,
        top:280,
        backgroundColor:'#FFFFFF',
        boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        borderRadius:15,
          },

          formcard3: {
            position: 'absolute',
            width:359,
            height:100,
            left:16,
            top:410,
            backgroundColor:'#FFFFFF',
            boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
            borderRadius:15,
              },

              formcard4: {
                position: 'absolute',
                width:359,
                height:100,
                left:16,
                top:540,
                backgroundColor:'#FFFFFF',
                boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
                borderRadius:15,
                  },

                  formcard5: {
                    position: 'absolute',
                    width:359,
                    height:100,
                    left:16,
                    top:670,
                    backgroundColor:'#FFFFFF',
                    boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius:15,
                      },
  
    formhead:{
      
      fontSize:25,
      
      alignSelf:'center'
    },


  head:{
    fontSize:15,
    marginLeft:100,
    

  },

  headline:{
    fontSize:16,
    fontWeight:'400',
    marginLeft:210,
  
    

  },

  headline2:{
    fontSize:10,
    marginBottom:-70,
    marginLeft:210,
    marginTop:-20
  },


image1:{
  paddingLeft:200
},
button2: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  width: 80,
  height:40,
  marginTop: 2,
  borderRadius:10,
  marginLeft:'75%'
},

  
  
  
  });

export default InventoryScreen;