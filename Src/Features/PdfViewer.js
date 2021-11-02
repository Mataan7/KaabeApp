import React from "react";
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Constants from "expo-constants";

export const PdfViewer = () => {
  return (
    <View style={styles.container}>
      <PDFReader
        source={{
          uri: "https://nptel.ac.in/content/storage2/courses/122103039/pdf/mod1.pdf",
        }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        webviewStyle={{ backgroundColor: "transparent" }}
        withPinchZoom={true}
        webviewProps={{
          startInLoadingState: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
