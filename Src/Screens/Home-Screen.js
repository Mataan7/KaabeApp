import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { HomeHeaderView } from "../Features/HomeScreenTopView";
import { SubjectView } from "../Features/Subjects-View";
import { RecentVideoList } from "../Features/RecentVideoList";
import { UserData } from "../Utilits/UserData";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeHeaderView navigation={navigation} />
      <Text style={styles.greetingTextStyle}>
        {`Hi! ${UserData.firstName} what will you learn today?`}
      </Text>

      <SubjectView navigation={navigation} />
      <View style={styles.recentVideoListViewStyle}>
        <RecentVideoList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greetingTextStyle: {
    fontSize: 19,
    color: "black",

    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: "Lato_700Bold",
  },
  recentVideoListViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
