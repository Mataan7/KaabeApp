import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

import { VideoData } from "../Utilits/RecentVideos-Data";
import PlayButton from "../Utilits/Play-Botton";
export const RecentVideoList = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={styles.VideoCardStyle}
          source={{
            uri: item.url,
          }}
        >
          <Text style={styles.recentListimageTextStyle}> {item.subject}</Text>
          <View style={styles.iconStyle}>
            <PlayButton />
            <Text style={styles.recentListimageTextStyle}> {item.tobic}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.recentVideoListTitleStyle}>Recent Videos</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={VideoData}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  VideoCardStyle: {
    height: 110,
    width: 190,
    borderRadius: 10,
    margin: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  recentListimageTextStyle: {
    color: "#fff",
    fontFamily: "Lato_700Bold",
    marginLeft: 10,
  },
  iconStyle: { margin: 10, marginTop: 7, flexDirection: "row" },
  recentVideoListTitleStyle: {
    fontSize: 20,
    color: "black",

    marginBottom: 5,
    marginLeft: 10,
    fontFamily: "Lato_700Bold",
  },
});
