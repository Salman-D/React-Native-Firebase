import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import database from '@react-native-firebase/database';

export default function Expense_tracker() {
  const [inputTextValue, setInputTextValue] = useState(null);
  const [list, setList] = useState(null);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await database()
        .ref('todo')
        .on('value', tempData => {
          console.log(data);
          setList(tempData.val());
        });
    } catch (err) {
      console.log(err);
    }
  };

  const IncomeData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const index = list.length;
        const response = await database().ref(`todo/${index}`).set({
          value: inputTextValue,
        });

        console.log(response);

        setInputTextValue('');
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const ExpenseData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const index = list.length;
        const response = await database().ref(`todo/${index}`).set({
          value: inputTextValue,
        });

        console.log(response);

        setInputTextValue('');
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const response = await database()
          .ref(`todo/${selectedCardIndex}`)
          .update({
            value: inputTextValue,
          });

        console.log(response);
        setInputTextValue('');
        setIsUpdateData(false);
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardPress = (cardIndex, cardValue) => {
    try {
      setIsUpdateData(true);
      setSelectedCardIndex(cardIndex);
      setInputTextValue(cardValue);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardlongPress = (cardIndex, cardValue) => {
    try {
      Alert.alert("Alert",`Are You Sure to delete ${cardValue}`,[
        {
          text:"Cancel",
          onPress : () => {
            console.log("Cancel is Press")
          },
        },
        {
          text:"Ok",
          onPress : async () => {
            try{
              const response = database().ref(`todo/${cardIndex}`).remove();
            }catch(err){
              console.log(err)
            }
          },
        },
      ])
      // setIsUpdateData(true);
      // setSelectedCardIndex(cardIndex);
      // setInputTextValue(cardValue);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Expense_tracker
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Value"
          keyboardType="numeric"
          value={inputTextValue}
          onChangeText={value => setInputTextValue(value)}
        />
        <View style={{alignItems:"baseline"}}>
        
          <TouchableOpacity
            style={styles.incomeButton}
            onPress={() => IncomeData()}>
            <Text style={{color: '#fff' , fontWeight:"bold"}}>Income</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ExpenseButton}
            onPress={() => ExpenseData()}>
            <Text style={{color: '#fff' , fontWeight:"bold"}}>Expense</Text>
          </TouchableOpacity>

        </View>
          
          
          

      </View>

      <View style={styles.cardContainer}>
        <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>
          Todo List
        </Text>

        <FlatList
          data={list}
          renderItem={item => {
            const cardIndex = item.index;
            if (item.item !== null) {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleCardPress(cardIndex, item.item.value)}
                  onLongPress={()=>{handleCardlongPress(cardIndex,item.item.value)}}>
                  <Text>{item.item.value}</Text>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:30,
    alignItems: 'center',
  },
  inputBox: {
    width: 350,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  incomeButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    width:'40%',
    marginLeft:10,
    padding: 10,
    borderRadius: 50,
  },
  ExpenseButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    width:'40%',
    marginTop:-39,
    marginLeft:200,
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
});