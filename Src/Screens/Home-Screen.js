import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderView } from "../Features/HomeScreenTopView";
import { SubjectView } from "../Features/Subjects-View";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Text style={styles.greetingTextStyle}>Subax wanagsan Zahal!</Text>
      <SubjectView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetingTextStyle: {
    fontSize: 22.5,
    color: "black",

    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: "Lato_700Bold_Italic",
  },
});
