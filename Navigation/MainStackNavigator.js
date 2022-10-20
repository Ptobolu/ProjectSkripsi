import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../Screens/About";
import Notifikasi from '../Screens/Notifikasi';
import HomeS from "../Screens/HomeS";
import Feedback from '../Screens/Feedback';
import Tracking from '../Screens/Tracking';
import InputData from "../src/component/Pages/Data/InputData";
import DetailNotif from '../src/component/Pages/Data/DetailNotif'



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#29CC39",
  },
  headerTintColor: "white",
  headerBackTitle: "#29CC39",

};

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{
      screenOptionStyle
    }}>
      <Stack.Screen name="Menu Home" component={HomeS} options={{
        headerShown: false
      }} />
      <Stack.Screen name="InputData" component={InputData} 
       options={{ 
        title: "Isi Data Diri",
        headerStyle: {
          backgroundColor: '#29CC39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
      <Stack.Screen name="Notifikasi" component={Notifikasi}/>
      <Stack.Screen name="DetailNotif" component={DetailNotif} 
      options={{ 
        title: "Detail Notifikasi",
        headerStyle: {
          backgroundColor: '#29CC39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}/>
    </Stack.Navigator>
  );
}


const FeedbackStackNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Feeback" component={Feedback} />
    </Stack.Navigator>
  );
}

const NotifikasiStack = () =>{
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Notifikasi" component={Notifikasi} options={{
        title: "Notifikasi Laporan Masuk",
        headerStyle: {
          backgroundColor: '#29CC39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const TrackingStack = () =>{
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tracking" component={Tracking} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, AboutStackNavigator, FeedbackStackNavigator, NotifikasiStack,TrackingStack};