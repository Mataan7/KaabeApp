import React, { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { SubjectData } from "../Utilits/SubjectView-Data";

const window = Dimensions.get("window");
export const SubjectView = () => {
  const [listrender, setListRender] = useState(0);
  const images = {
    bio: {
      uri: require("../../assets/biology.png"),
    },
    math: {
      uri: require("../../assets/math.png"),
    },
    chem: {
      uri: require("../../assets/chemistry.png"),
    },
    phy: {
      uri: require("../../assets/physics.png"),
    },
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
    };
    return (
      <LinearGradient
        colors={item.gardingColors}
        style={styles.subjectcardstyle}
      >
        <View style={styles.subjectImageViewStyle}>
          <Image style={styles.imagesStyle} source={imagepicker()} />
        </View>
        <Text style={styles.subjectTextStyle}>{item.name}</Text>
      </LinearGradient>
    );
  };

  console.log(window.height, window.width);
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
    height: 30,
    width: 30,
  },
  subjectImageViewStyle: {
    borderRadius: 27.5,
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  subjectTextStyle: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});
