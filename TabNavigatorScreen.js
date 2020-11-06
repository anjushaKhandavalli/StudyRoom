import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Attendance from './Components/Attendance';
import Students from './Components/Students';
import HomeWork from './Components/HomeWork';



const Tab = createMaterialTopTabNavigator();

const TabNavigatorScreen = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          indicatorStyle: { backgroundColor: '#ffffff' },
          labelStyle: {fontSize: 12 },
          style: {backgroundColor: '#00a699' },
        }}
      >
        <Tab.Screen name="HomeWork" component={HomeWork} />
        <Tab.Screen name="Attendance" component={Attendance} />
        <Tab.Screen name="Students" component={Students} />
      </Tab.Navigator>
  );
}

export default TabNavigatorScreen;
