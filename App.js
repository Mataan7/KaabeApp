import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./Src/Screens/Home-Screen";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!latoLoaded) {
    return null;
  }
  return <HomeScreen />;
}
