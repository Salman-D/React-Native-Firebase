import React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Profile () {

  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:20 , fontWeight:"bold"}}>Email: {Auth().currentUser.email}</Text>
      <Text  style={{fontSize:18 , fontWeight:"bold"}}>UID: {Auth().currentUser.uid} </Text>


      <View>
        <TouchableOpacity
          style={{
            width: '20%',
            backgroundColor: 'red',
            alignItems: 'center',
            padding: 10,
            marginLeft: 280,
            borderRadius: 20,
          }}
          onPress={async () => {
            await Auth().signOut();
            navigation.dispatch(StackActions.replace('Login'));
            // navigation.navigate('Login');
          }}>
          <Text style={{ color: '#fff' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
