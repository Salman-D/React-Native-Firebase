
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen'
import Profile from '../../Screens/Profile'
import Course_List from '../../Screens/ShowCourse2'
import User_Courses from '../../Screens/UserCourses'
import Course from '../../Screens/Course'
import IonicIcon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: () => <BottomIcons name='home' />
          }}
      />

      <Tab.Screen
       name="Course_List"
       component={Course_List}
       options={{
        headerShown: false,
        tabBarIcon: () => <BottomIcons name='newspaper-sharp' />
      }}
      />  
        
        <Tab.Screen 
        name="Course" 
        component={Course}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='book' />
        }}
       /> 

      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='person' />
        }}
       />  

      <Tab.Screen 
        name="User_Courses" 
        component={User_Courses}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='person' />
        }}
       /> 

    
     </Tab.Navigator>
  );
}
// npx react-native link react-native-vector-icons  

const BottomIcons = props => {
  return (
    <IonicIcon name={props.name} size={20} />
  )
}

export default Bottom;