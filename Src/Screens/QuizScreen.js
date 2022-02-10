import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Surface } from "react-native-paper";

const Header = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.2 }}
      colors={["#05CEA8", "#35A29F"]}
      style={Styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: StatusBar.currentHeight + 10,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              marginLeft: 15,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              width: 35,
              borderRadius: 16.5,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              marginBottom: 5,
            }}
          >
            <AntDesign name="pause" color="#fff" size={25} />
          </View>
        </TouchableOpacity>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={{ fontFamily: "Lato_700Bold", fontSize: 15 }}>
            10:45
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 15,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              borderRadius: 35,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              justifyContent: "center",
              alignContent: "center",
              marginRight: 15,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 17,

                fontFamily: "Lato_700Bold",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 0.7,

            marginTop: 10,
          }}
        >
          <View>
            <Text style={Styles.userNameStyle}>{"Physics Test"}</Text>
            <Text style={Styles.schoolTextStyle}>{"Sound Properties"}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            paddingRight: 20,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 1 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 2 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 3 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              backgroundColor: "#fff",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#000" }}> 4 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 5 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 6 </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderColor: "#fff",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}> 7 </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export const QuizScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Lato_700Bold",
            fontSize: 11,
            color: "red",
            marginLeft: 15,
          }}
        >
          01:45
        </Text>
        <View
          style={{
            flex: 1,
            marginRight: 15,
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Lato_700Bold",
              fontSize: 14,
              color: "#000",
              marginRight: 10,
            }}
          >
            Marked for review
          </Text>
          <AntDesign name="eye" color="#05CEA8" size={25} />
        </View>
      </View>
      <View style={{ margin: 10, marginTop: 30 }}>
        <Text
          style={{
            color: "#000",
            fontSize: 20,

            fontFamily: "Lato_700Bold",
          }}
        >
          A force has been applied to a ball when it is:
        </Text>
      </View>
      <Surface
        style={{
          height: 70,
          borderRadius: 10,
          margin: 15,
          marginTop: 1,
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#05CEA8",
            fontSize: 20,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          A.
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 19,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          Kicked
        </Text>
      </Surface>
      <Surface
        style={{
          height: 70,
          borderRadius: 10,
          margin: 15,
          marginTop: 1,
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#05CEA8",
            fontSize: 20,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          B.
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 19,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          Pushed
        </Text>
      </Surface>
      <Surface
        style={{
          height: 70,
          borderRadius: 10,
          margin: 15,
          marginTop: 1,
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#05CEA8",
            fontSize: 20,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          C.
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 19,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          Thrown
        </Text>
      </Surface>
      <Surface
        style={{
          height: 70,
          borderRadius: 10,
          margin: 15,
          marginTop: 1,
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#05CEA8",
            fontSize: 20,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          D.
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 19,
            fontFamily: "Lato_700Bold",
            marginLeft: 25,
          }}
        >
          All of these
        </Text>
      </Surface>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            borderRadius: 35,
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            justifyContent: "center",
            alignContent: "center",
            marginRight: 15,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,

              fontFamily: "Lato_700Bold",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 165,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            borderRadius: 35,
            backgroundColor: "#05CEA8",
            justifyContent: "center",
            alignContent: "center",
            marginRight: 15,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,

              fontFamily: "Lato_700Bold",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 235,
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
