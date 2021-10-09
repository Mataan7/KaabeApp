import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ChaptersData } from "../Utilits/ChaptersData";
import { Surface } from "react-native-paper";
import { Context } from "../../App";
import { HeaderView } from "../Global-Components/Header";

export const ChapterScreen = ({ navigation }) => {
  const value = useContext(Context);

  const renderItem = ({ item }) => {
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

    const imagepicker = () => {
      if (value.subject == "phy") {
        return images.phy.uri;
      }
      if (value.subject === "math") {
        return images.math.uri;
      }
      if (value.subject === "bio") {
        return images.bio.uri;
      }
      if (value.subject === "chem") {
        return images.chem.uri;
      }
      if (value.subject === "geo") {
        return images.geo.uri;
      }
      if (value.subject === "eng") {
        return images.eng.uri;
      }
    };

    return (
      <Surface style={[Styles.listView, item.style.listView]}>
        <Image style={Styles.subjectIconStyle} source={imagepicker()} />
        <View>
          <Text style={Styles.listTextStyle}>{item.name}</Text>
          <Text style={Styles.chapterName}>{"Chemical Compounds"}</Text>
        </View>
      </Surface>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderView subject={value.subject} navigation={navigation} />
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ChaptersData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  listView: {
    height: 70,
    borderRadius: 10,
    margin: 10,
    marginBottom: 2,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  listTextStyle: {
    fontSize: 19,
    color: "black",
    fontFamily: "Lato_700Bold",
    marginBottom: 5,
    marginLeft: 20,
  },
  subjectIconStyle: {
    height: 45,
    width: 45,
  },
  chapterName: {
    fontSize: 13,
    marginBottom: 4,
    marginLeft: 20,
    fontFamily: "Lato_400Regular",
  },
});
