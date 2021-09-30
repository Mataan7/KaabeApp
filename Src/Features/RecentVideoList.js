import React from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { VideoData } from "../Utilits/RecentVideos-Data";

export const RecentVideoList = () => {
  const renderItem = (item) => {
    return <view></view>;
  };

  return (
    <View>
      <Text></Text>
      <FlatList data={VideoData} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  VideoCardStyle: {
    height: 50,
    width: 80,
    backgroundColor: "blue",
  },
});
