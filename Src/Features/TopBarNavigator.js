import * as React from "react";
import { Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { SettingScreen } from "../Screens/SettingScreen";
import { VideoListScreen } from "../Screens/VideoListSceen";
import { EbooksListScreen } from "../Screens/EbooksListScreen";
const Tab = createMaterialTopTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      backBehavior="none"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarItemStyle: { marginRigth: 0, marginLeft: 0 },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: "red",
            marginLeft: 19,

            width: 100,
          },
        }}
        name="Videos"
        component={VideoListScreen}
      />
      <Tab.Screen
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: "green",
            marginLeft: 19,
            width: 100,
          },
        }}
        name="E-Books"
        component={EbooksListScreen}
      />
      <Tab.Screen
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: "blue",
            marginLeft: 19,
            width: 100,
          },
        }}
        name="Tests"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};
