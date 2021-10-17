import React, { useState, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { SubjectData } from "../Utilits/SubjectView-Data";
import { Context } from "../../App";
const window = Dimensions.get("window");
export const SubjectView = ({ navigation }) => {
  const value = useContext(Context);
  const images = {
    bio: {
      uri: require("../../assets/Subject-Icon/Biology.png"),
    },
    math: {
      uri: require("../../assets/Subject-Icon/Math.png"),
    },
    chem: {
      uri: require("../../assets/Subject-Icon/Chemistry.png"),
    },
    phy: {
      uri: require("../../assets/Subject-Icon/Physics.png"),
    },
    geo: { uri: require("../../assets/Subject-Icon/Geography.png") },
    eng: { uri: require("../../assets/Subject-Icon/English.png") },
  };

  const renderItem = ({ item }) => {
    const imagepicker = () => {
      if (item.icon == "phy") {
        return images.phy.uri;
      }
      if (item.icon === "math") {
        return images.math.uri;
      }
      if (item.icon === "bio") {
        return images.bio.uri;
      }
      if (item.icon === "chem") {
        return images.chem.uri;
      }
      if (item.icon === "geo") {
        return images.geo.uri;
      }
      if (item.icon === "eng") {
        return images.eng.uri;
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          value.setCurrentSubject(item.icon);
          navigation.navigate("Chapters");
        }}
      >
        <LinearGradient
          colors={item.gardingColors}
          style={styles.subjectcardstyle}
        >
          <View style={styles.subjectImageViewStyle}>
            <Image style={styles.imagesStyle} source={imagepicker()} />
          </View>
          <Text style={styles.subjectTextStyle}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const numColumns = 2;
  return (
    <View style={styles.container}>
      <FlatList
        data={SubjectData}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  subjectcardstyle: {
    marginRight: window.width / 45,
    marginLeft: window.width / 45,
    marginBottom: window.height / 80,
    marginTop: window.height / 80,
    height: window.height / 10.66666666666667,
    width: window.width / 2.25,
    borderRadius: window.width / 30,
    alignItems: "center",
    flexDirection: "row",
  },
  imagesStyle: {
    height: 35,
    width: 35,
    marginRight: 2,
  },
  subjectImageViewStyle: {
    borderRadius: 25,
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  subjectTextStyle: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});
