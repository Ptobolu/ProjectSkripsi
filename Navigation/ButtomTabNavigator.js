import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStackNavigator, MainStackNavigator, FeedbackStackNavigator, NotifikasiStack,TrackingStack } from "./MainStackNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#29CC39',
      },
    }}>
      <Tab.Screen name="BERANDA" component={MainStackNavigator} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) =>(
        <MaterialCommunityIcons name='home' size={30} color="black"/>
        )
      }} />
      <Tab.Screen name="FEEDBACK" component={FeedbackStackNavigator} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) =>(
          <MaterialCommunityIcons name='star-half-full' size={30} color="black"/>
          )
      }}/>
       <Tab.Screen name="NOTIFIKASI" component={NotifikasiStack} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) =>(
          <MaterialCommunityIcons name='bell-ring' size={30} color="black"/>
          )
      }}/>
       <Tab.Screen name="ABOUT" component={AboutStackNavigator} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) =>(
          <MaterialCommunityIcons name='information' size={30} color="black"/>
          )
      }}/>
       <Tab.Screen name="TRACKING" component={TrackingStack} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) =>(
          <MaterialCommunityIcons name='tractor' size={30} color="black"/>
          )
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;