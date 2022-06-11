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
import database from '@react-native-firebase/database';

export default function App() {
  const [newCourse, setnewCourse] = useState(null);
  const [CourseDuration, setCourseDuration] = useState(null);
  const [minimin_Edu, setminimin_Edu] = useState(null);
  const [Teacher_name, setTeacher_name] = useState(null);

  const [list, setList] = useState(null);


  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      database().ref('todo').once("value").then(function (snapshot) {
        // console.log(snapshot.val()[1])

        var userdata=[]

        for(var i=1;i<snapshot.val().length;i++){
          console.log(snapshot.val()[i])
          userdata.push(snapshot.val()[i])

        }
        setList(userdata);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddData = async () => {
    try {
      if (newCourse.length > 0) {
        const index = list.length;
        console.log(index)
        const response = await database().ref(`todo/${index}`).set({
          course_name: newCourse,
          Course_Doration:CourseDuration,
          minimin_Edu:minimin_Edu,
          Teacher_name : Teacher_name
        });

        console.log(response);

        setnewCourse('');
        setCourseDuration('')
        setTeacher_name('')
        setminimin_Edu('')
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Add New Course's
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter new Course"
          value={newCourse}
          onChangeText={value => setnewCourse(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Course Durations"
          value={CourseDuration}
          onChangeText={value => setCourseDuration(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Minimun Education"
          value={minimin_Edu}
          onChangeText={value => setminimin_Edu(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Teacher Name"
          value={Teacher_name}
          onChangeText={value => setTeacher_name(value)}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddData()}>
          <Text style={{color: '#fff' , fontWeight:"bold"}}>Add Course</Text>
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
    marginVertical:180
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
});