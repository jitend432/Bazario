import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenScreen from '../MenScreen/MenScreen';
import WomenScreen from '../WomenScreen/WomenScreen';
import KidsScreen from '../KidsScreen/KidsScreen';
import HomeTab from './HomeTab/HomeTab';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000'
      }}>

      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color, fontWeight:'900'}}>Home</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />

      {/* <Tab.Screen name="Tab2" component={Tab2Screen} /> */}
      <Tab.Screen
        name="Mens"
        component={MenScreen}
        options={{         
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color, fontWeight:'900'}}>Men</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
      <Tab.Screen
        name="Women"
        component={WomenScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color, fontWeight:'900'}}>Women</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
      <Tab.Screen
        name="Kids"
        component={KidsScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 15, color: color, fontWeight:'900'}}>Kids</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
