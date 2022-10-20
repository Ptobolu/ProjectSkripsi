import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './ButtomTabNavigator'
import LogOut from "../src/component/Auth/LogOut";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;