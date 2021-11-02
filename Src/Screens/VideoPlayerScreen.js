import React from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import PlayButton from "../Utilits/Play-Botton";
import { VideoPlayer1 } from "../Features/VideoPlayer";
import { VideoData } from "../Utilits/VideosData";
export const VideoPlayerScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
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
        marginTop: StatusBar.currentHeight,

        backgroundColor: "#fff",
      }}
    >
      <VideoPlayer1 />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          margin: 12,
          marginLeft: 7,
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 18,
            marginTop: 2,
            marginLeft: 8,

            fontFamily: "Lato_700Bold",
          }}
        >
          Sound Properties
        </Text>
      </View>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,

            fontWeight: "bold",
          }}
        >
          Related Videos
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={VideoData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
