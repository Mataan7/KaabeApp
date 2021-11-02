import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserData } from "../Utilits/UserData";
import HomeTopBar from "../Utilits/HomeTopBar";

const window = Dimensions.get("window");
export const HomeHeaderView = ({ navigation }) => {
  return (
    <View style={styles.svg}>
      <View
        style={{
          position: "absolute",
          height: window.height / 2.8,
          width: window.width,
        }}
      >
        <HomeTopBar />
      </View>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          marginTop: -25,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{ height: 50, width: 60 }}>
            <Image
              style={{ height: 30, width: 30, marginLeft: 15 }}
              source={require("../../assets/layout.png")}
            />
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
          flexDirection: "row",
          alignItems: "center",
          height: 110,
          marginTop: 15,
        }}
      >
        <TouchableOpacity>
          <View style={styles.profileImageViewStyle}>
            <Image
              style={styles.profileImageStyle}
              source={require("../../assets/Profile.jpg")}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: "100%",
            marginLeft: 2,
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.userNameStyle}>
              {UserData.firstName} {UserData.secondName}
            </Text>
          </TouchableOpacity>
          <Text style={styles.schoolTextStyle}>{UserData.school}</Text>
          <Text style={styles.classTextStyle}>{UserData.class}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    height: window.height / 2.8,
    width: window.width,
    justifyContent: "center",
    overflow: "hidden",
  },
  profileImageStyle: {
    height: "150%",
    width: "100%",
  },
  profileImageViewStyle: {
    overflow: "hidden",
    borderRadius: 35,
    height: 70,
    width: 70,
    margin: 20,
    marginTop: 10,
    borderColor: "#FFF",
    borderWidth: 1,
  },
  userNameStyle: {
    color: "#fff",
    fontSize: 23,

    fontFamily: "Lato_700Bold",
    marginBottom: -1,
  },
  schoolTextStyle: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 4,
    fontFamily: "Lato_700Bold",
  },
  classTextStyle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Lato_700Bold",
    marginBottom: 0,
  },
});
