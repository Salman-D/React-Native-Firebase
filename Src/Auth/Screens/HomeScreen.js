import { View, Text ,Dimensions, Image,ScrollView, StyleSheet} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image style={styles.Images}source = {require('../../../assests/Img/1.jpg')} />
      </ScrollView>
    </View>
  )
}

const {height, width} = Dimensions.get('screen');


export default HomeScreen


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "space-around",
      alignItems: "center"
  },
  logocontainer: {
      justifyContent: "center",
      alignItems: "center"
  },
  text: {
      fontSize:20,
      fontWeight:"bold",
      color: "white"
  },
  Images: {
    justifyContent: "center",
      alignItems: "center",
      height: height -150,
      width: width,
      // margin:20,
      borderRadius: 10
  },
  BottomConatainer: {},
  Bottomtext: {
      fontSize:20,
      color: "white"
  }
})
