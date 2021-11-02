import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EbookData } from "../Utilits/EbookData";
import { LinearGradient } from "expo-linear-gradient";

const window = Dimensions.get("window");
export const EbooksListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ justifyContent: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PdfViewerScreen")}
          >
            <LinearGradient
              start={{ x: 1, y: 0.2 }}
              colors={["#9D50BB", "#592F9B"]}
              style={{
                height: 60,
                width: 60,
                margin: 12,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 40,
                backgroundColor: "#592F9B",
              }}
            >
              <AntDesign name="book" color="#fff" size={30} />
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color: "#000",
                fontSize: 16,

                marginLeft: 10,
                fontFamily: "Lato_700Bold",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#CBCBCB",
                fontSize: 14,
                marginTop: 2,
                marginLeft: 10,

                fontFamily: "Lato_700Bold",
              }}
            >
              {item.pages} Pages | {item.size} MB
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <AntDesign name="download" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: "#F1F1F1",
            borderBottomWidth: 2,
            height: 0,
            marginLeft: 12,
            width: window.width,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={EbookData}
        renderItem={renderItem}
      />
    </View>
  );
};
