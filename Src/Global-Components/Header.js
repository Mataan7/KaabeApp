import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

export const HeaderView = ({ subject, navigation }) => {
  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: StatusBar.currentHeight + 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image
              style={{ height: 22, width: 25, marginLeft: 15 }}
              source={require("../../assets/arrow.png")}
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
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={Styles.userNameStyle}>{subject}</Text>

        <Text style={Styles.schoolTextStyle}>12 Chapters</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 200,
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
