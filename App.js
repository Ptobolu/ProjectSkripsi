import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { LogBox } from 'react-native';
import ButtomTabNavigator from './Navigation/ButtomTabNavigator'
import Kamera from './src/component/Form/Kamera'
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

 const App = () => {
  return <NavigationContainer>
    <ButtomTabNavigator />
  </NavigationContainer>;
}
export default App;