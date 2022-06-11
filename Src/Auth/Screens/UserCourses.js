import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import database from '@react-native-firebase/database';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function Todo() {

  const navigation = useNavigation();

  const RegisterCouse = () => {
    navigation.navigate('Register Couse')
  }


  const [list, setList] = useState([]);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      database().ref('Forms/WEB').once("value").then(function (snapshot) {
        console.log(snapshot.val()[1])

        var userdata = []

        for (var i = 1; i < snapshot.val().length; i++) {
          console.log(snapshot.val()[i])
          userdata.push(snapshot.val()[i])

        }
        setList(userdata);
      });
    } catch (err) {
      console.log(err);
    }
  };



  return (

    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            Course List
          </Text>

          {list.map((v, i) => {
            console.log(v)
            return (

              <View style={styles.card} key={i}>
                <Text>Timing : {v.Timing}</Text>
                <Text>Days : {v.WEB.City}</Text>
                <Text>Teacher Name : {v.Sir}</Text>
                <Text >Course Doration : {v.CCO}</Text>
                <Text>Minimum Edution : {v.Sir}</Text>
                {/* <TouchableOpacity  onPress={()=> RegisterCouse()}>
                  <View>
                    <Text style={styles.JoinCourse}>
                      Join this Course
                    </Text>
                  </View>
                </TouchableOpacity> */}
              </View>

            )
            
          })}

        </View>
      </ScrollView>

    </View>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
  },
  inputBox: {
    width: 350,
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
    width: 320,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  JoinCourse:{
    justifyContent:"flex-end",
    fontSize:17,
    color:'#00c663',
    marginHorizontal:70,
    marginVertical:10,
    fontWeight:"bold"

  }
});