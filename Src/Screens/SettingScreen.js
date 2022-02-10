import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { QuizScreen } from "./QuizScreen";

export const SettingScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("QuizScreen")}
        style={{
          height: 50,
          width: 80,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};
