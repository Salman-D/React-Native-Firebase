import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  //
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const user = await auth().signInWithEmailAndPassword(email, password);

        // console.log(user.user.email);
        //   alert('You Are Login');
          if(user.user.email=="mrsallu881@gmail.com" ){
            console.log("get")
            navigation.navigate("Bottom2")
            // navigation.dispatch(StackActions.replace('Bottom2'));
          }
          else{
            navigation.navigate("Bottom")

              // navigation.dispatch(StackActions.replace('Bottom'));
          }
          
          // if(user)
          // navigation.navigate('Bottom')
        // if (user.user.emailVerified) {
        // } else {
        //   alert('Please Verify Your Email Checkout Inbox');

        //   await auth().currentUser.sendEmailVerification();
        //   await auth().signOut();
        // }
      }
       else {
        alert('Please Enter All Data');
      }
    } catch (err) {
      console.log(err);

      setMessage(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold' , color:"#00c663"}} >
          Login
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleLogin()}>
          <Text style={{color: '#fff' , fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>

        <Text>{message}</Text>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{color: '#00c663' , fontWeight:"bold"}}>Don't Have Account ! Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 350,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    borderColor:"#00c663"
  },
  addButton: {
    backgroundColor: '#00c663',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  signup: {
    alignItems: 'center',
  },
});