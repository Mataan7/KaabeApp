import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const math = { name: "Math", gardingColors: ["#FF5D83", "#FF003B"] };
const bio = { name: "Biology", gardingColors: ["#00FF46", "#51A42B"] };
const chem = { name: "Chemistry", gardingColors: ["#9D50BB", "#592F9B"] };
const geo = { name: "Geography", gardingColors: ["#05CEA8", "#35A29F"] };
const eng = { name: "English", gardingColors: ["#6579A3", "#344566"] };
const phy = { name: "Physics", gardingColors: ["#FDC830", "#f37335"] };
export const HeaderView = ({
  subject,
  navigation,
  totalChapters,
  contentData,
  imageSource,
  inContentWindow,
  chapter,
}) => {
  let Colors = [];
  let subjectName = " ";
  const setter = () => {
    if (subject == "phy") {
      Colors = phy.gardingColors;
      subjectName = phy.name;
      return;
    }
    if (subject === "math") {
      Colors = math.gardingColors;
      subjectName = math.name;
      return;
    }
    if (subject === "bio") {
      Colors = bio.gardingColors;
      subjectName = bio.name;
      return;
    }
    if (subject === "chem") {
      Colors = chem.gardingColors;
      subjectName = chem.name;
      return;
    }
    if (subject === "geo") {
      Colors = geo.gardingColors;
      subjectName = geo.name;
      return;
    }
    if (subject === "eng") {
      Colors = eng.gardingColors;
      subjectName = eng.name;
      return;
    }
  };

  setter();
  const ChaptersText = () => {
    return (
      <>
        <Text style={Styles.userNameStyle}>{subjectName}</Text>
        <Text style={Styles.schoolTextStyle}>{totalChapters} Chapters</Text>
      </>
    );
  };

  const ContentText = () => {
    return (
      <>
        <Text style={Styles.userNameStyle}>{chapter}</Text>
        <Text style={Styles.schoolTextStyle}>
          {contentData.totalVideos} Videos | {contentData.totalEbooks} Ebooks |{" "}
          {contentData.totalTests} Tests
        </Text>
      </>
    );
  };

  return (
    <LinearGradient
      start={{ x: 1, y: 0.2 }}
      colors={Colors}
      style={Styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: StatusBar.currentHeight + 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ paddingLeft: 15 }}>
            <AntDesign name="arrowleft" color="#fff" size={29} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ height: 25, width: 25, marginRight: 25 }}
              source={require("../../assets/search.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ height: 29, width: 29, marginRight: 15 }}
              source={require("../../assets/bell.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,

          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.7,
            justifyContent: "flex-end",
          }}
        >
          {inContentWindow ? <ContentText /> : <ChaptersText />}
        </View>
        <View
          style={{
            flex: 0.4,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: 20,
          }}
        >
          <Image style={{ height: 100, width: 100 }} source={imageSource} />
        </View>
      </View>
    </LinearGradient>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 215,
    backgroundColor: "blue",
  },
  textStyle: {
    fontSize: 13,
    marginBottom: 4,
    marginLeft: 20,
    fontFamily: "Lato_400Regular",
  },
  userNameStyle: {
    color: "#fff",
    fontSize: 29,
    marginLeft: 20,

    fontFamily: "Lato_700Bold",
    marginBottom: 10,
  },
  schoolTextStyle: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 20,

    fontFamily: "Lato_700Bold",
  },
});
