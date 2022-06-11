import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity ,Dimensions ,StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



const CreateAccount = () => {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const  [CourseName, setCourseName] = useState('');
  const [City, setCity] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')
  const [Education, setEducation] = useState('')


const JoinCourse = () =>{
  console.log(Fname,Lname,Education,PhoneNo,City,CourseName)
  setCity(''),
  setCourseName(''),
  setEducation(''),
  setPhoneNo(''),
  setLname(''),
  setFname('')

  var data = auth().currentUser.uid
  

  database().ref("Forms").child(CourseName).child(data).set({
    "FNAME":Fname,
    "LNAME":Lname,
    "EMAIL":auth().currentUser.email,
    Education,PhoneNo,City,CourseName,
    // "Course_duration":email,
    
  })

  database().ref("user").child(data).update({
    reg:"reg",
    CourseName,

  })


}

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:20 , marginBottom:10 , fontWeight:"bold"}}> Registration  Form</Text>

      <View style={styles.input1}>
        <TextInput
          placeholder="First Name"
          onChangeText={val => setFname(val)}
        />
      </View>
      
      <View style={styles.input1}>
        <TextInput
          placeholder="Last Name"
          onChangeText={val => setLname(val)}
        />
      </View>

      <View style={styles.input1}>
        <TextInput
          placeholder="Course Name"
          onChangeText={val => setCourseName(val)}
        />
      </View>
      
      <View style={styles.input1}>
        <TextInput
          placeholder="Education"
          onChangeText={val => setEducation(val)}
        />
      </View>
      
      <View style={styles.input1}>
        <TextInput
          placeholder="City"
          onChangeText={val => setCity(val)}
        />
      </View>

      <View style={styles.input1}>
        <TextInput
         keyboardType = 'numeric'
          placeholder="Phone Number"
          onChangeText={val => setPhoneNo(val)}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.TouchableBtn1,
          {marginHorizontal: 50, paddingHorizontal: 30},
        ]}
        onPress={() => JoinCourse()}>
        <Text style={styles.TouchableText1}>Join Course</Text>
      </TouchableOpacity>

    </View>
  );
};

const {WIDTH, HEIGHT} = Dimensions.get('screen'); 

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: WIDTH,
    alignItems: 'center'
  },

  TouchableBtn1: {
    // width: '80%',
    padding: 10,
    backgroundColor: '#00c663',
    paddingHorizontal: 30,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  TouchableText1: {
    color: 'white',
    textAlign: 'center',
    fontWeight:"bold"
  },

  TouchableText2: {
    color: '#777777',
    textAlign: 'center',
  },

  TouchableBtn2: {
    // width: '80%',
    padding: 10,
    backgroundColor: '#044AA0',
    paddingHorizontal: 30,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  TouchableText2: {
    color: 'white',
  },

  input1: {
    backgroundColor: 'white',
    width: '80%',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginVertical: 5,
  },
});