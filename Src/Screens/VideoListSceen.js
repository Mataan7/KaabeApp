import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { VideoPlayer } from "../Features/VideoPlayer";
import PlayButton from "../Utilits/Play-Botton";
import { VideoData } from "../Utilits/VideosData";

const window = Dimensions.get("window");
export const VideoListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("VideoPlayerScreen")}
          >
            <ImageBackground
              style={{
                height: 80,
                width: 120,
                margin: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
              source={{
                uri: item.url,
              }}
            >
              <PlayButton />
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                marginTop: 30,
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
              {item.VideoMints} min
            </Text>
          </View>
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
        data={VideoData}
        renderItem={renderItem}
      />
    </View>
  );
};
