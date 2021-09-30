import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const window = Dimensions.get("window");
export const HeaderView = () => {
  return (
    <LinearGradient
      colors={["#56CCF2", "#2F80ED"]}
      style={styles.svg}
    ></LinearGradient>
  );
};

const styles = StyleSheet.create({
  svg: {
    height: window.height / 3.5,
    width: window.width,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 80,
  },
});
