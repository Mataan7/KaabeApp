import React, { useContext } from "react";
import { View, Text } from "react-native";
import { HeaderView } from "../Global-Components/Header";
import { Context } from "../../App";
import { MyTabs } from "../Features/TopBarNavigator";
import { Example } from "../Utilits/ContentData";

export const ChapterContentsScreen = ({ navigation }) => {
  const value = useContext(Context);

  return (
    <View style={{ flex: 1 }}>
      <HeaderView
        subject={value.subject}
        contentData={Example}
        navigation={navigation}
        inContentWindow={value.inContentWindow}
        chapter={value.chapter}
      />
      <MyTabs />
    </View>
  );
};
