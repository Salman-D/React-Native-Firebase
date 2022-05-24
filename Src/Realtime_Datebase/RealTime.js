import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import  database from '@react-native-firebase/database';

const Firestore = () => {

  const [mydata , setmydata] = useState(null)
  useEffect(()=>{    
    getDatabase();
  },[])

  const getDatabase = async () =>{
    try{
      const data = await database().ref('Users/1').once('value')

      setmydata(data.val())
      console.log(data)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={{alignItems:"center", justifyContent:"center" , flex:1 }}>
      <Text>Name : {mydata? mydata.name : "Loading..."} </Text>
      <Text>Age : {mydata? mydata.age : "Loading..."} </Text> 
      {/* <Text>Age : {mydata? mydata.Hobby.map(list => `  ${list}`) : "Loading..."} </Text>  */}
    </View>
  )
}

export default Firestore