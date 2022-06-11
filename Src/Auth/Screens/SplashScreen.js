import { View, Text , StyleSheet ,StatusBar, Image} from 'react-native'
import React, { useEffect } from 'react'
import Auth from "@react-native-firebase/auth"
import { StackActions, useNavigation } from '@react-navigation/native'
// import Logo1 from '../../../assests/Img/logo.jpg'


const SplashScreen = () => {

    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {
          // Auth().onAuthStateChanged(user => {
          //   const routeName = user !== null ? 'Bottom' : 'Login';
    
            navigation.dispatch(StackActions.replace("Login"));
          // });
        }, 3000);
    
        return () => {};
      }, []);


    return (
      <View style={styles.container}>

      <View></View>

      <StatusBar hidden={true} />

      <View style={styles.logocontainer}>
          {/* <Image source={{uri: ""}} style={styles.logo} /> */}
          <Image style={styles.logo}source = {require('../../../assests/Img/smit.png')} />
          <Text style={styles.text}>SMIT App</Text>
      </View>

      <View style={styles.BottomConatainer}>
          <Text style={styles.Bottomtext}>
              Made for 💓 Mr_Sallu
          </Text>
      </View>

  </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#01c663",
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
  logo: {
      height: 200,
      width: 200,
      borderRadius: 100
  },
  BottomConatainer: {},
  Bottomtext: {
      fontSize:20,
      color: "white"
  }
})
