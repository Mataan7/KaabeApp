import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { GeoChapters } from "../Utilits/ChaptersData";
import { ChemChapters } from "../Utilits/ChaptersData";
import { MathChapters } from "../Utilits/ChaptersData";
import { PhyChapters } from "../Utilits/ChaptersData";
import { EngChapters } from "../Utilits/ChaptersData";
import { BioChapters } from "../Utilits/ChaptersData";
import { Surface } from "react-native-paper";
import { Context } from "../../App";
import { HeaderView } from "../Global-Components/Header";
import { TotalChapters } from "../Utilits/ChaptersData";

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
export const ChapterScreen = ({ navigation }) => {
  const value = useContext(Context);
  let clickedSubject = {};
  let totalChapters = "";
  const imagepicker = () => {
    if (value.subject == "phy") {
      totalChapters = TotalChapters.phy;
      clickedSubject = PhyChapters;

      return images.phy.uri;
    }
    if (value.subject === "math") {
      totalChapters = TotalChapters.math;
      clickedSubject = MathChapters;
      return images.math.uri;
    }
    if (value.subject === "bio") {
      totalChapters = TotalChapters.bio;
      clickedSubject = BioChapters;
      return images.bio.uri;
    }
    if (value.subject === "chem") {
      totalChapters = TotalChapters.chem;
      clickedSubject = ChemChapters;
      return images.chem.uri;
    }
    if (value.subject === "geo") {
      totalChapters = TotalChapters.geo;
      clickedSubject = GeoChapters;
      return images.geo.uri;
    }
    if (value.subject === "eng") {
      totalChapters = TotalChapters.eng;
      clickedSubject = EngChapters;
      return images.eng.uri;
    }
  };
  const imageSource = imagepicker();

  const renderItem = ({ item }) => {
    return (
      <Surface
        style={{
          margin: 10,
          borderRadius: 10,
          marginBottom: 0,
          elevation: 10,
          ...item.style.listView,
        }}
      >
        <TouchableOpacity
          style={[Styles.listView]}
          onPress={() => {
            value.setCurrentChapter(item.chaptername);
            navigation.navigate("ChapterContentsScreen");
          }}
        >
          <Image style={Styles.subjectIconStyle} source={imageSource} />
          <View>
            <Text style={Styles.listTextStyle}>Chapter {item.id}</Text>
            <Text style={Styles.chapterName}>{item.chaptername}</Text>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderView
        subject={value.subject}
        totalChapters={totalChapters}
        navigation={navigation}
        imageSource={imageSource}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={clickedSubject}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  listView: {
    flex: 1,
    height: 70,
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
