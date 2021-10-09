import React from "react";
import { StyleSheet } from "react-native";
export const ChaptersData = [
  { id: "1", name: "Chapter 1", style: {} },
  { id: "2", name: "Chapter 2", style: {} },
  { id: "3", name: "Chapter 3", style: {} },
  { id: "4", name: "Chapter 4", style: {} },
  { id: "5", name: "Chapter 5", style: {} },
  { id: "6", name: "Chapter 6", style: {} },
  { id: "7", name: "Chapter 7", style: {} },
  { id: "8", name: "Chapter 8", style: {} },
  { id: "9", name: "Chapter 9", style: {} },
  { id: "10", name: "Chapter 10", style: {} },
  { id: "11", name: "Chapter 11", style: {} },
  {
    id: "12",
    name: "Chapter 12",
    style: StyleSheet.create({
      listView: {
        height: 70,
        borderRadius: 10,
        margin: 10,
        marginBottom: 20,
        elevation: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
      },
    }),
  },
];
