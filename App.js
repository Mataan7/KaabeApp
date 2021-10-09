import React, { createContext, useState } from "react";
import { DrawerNavigation } from "./Src/Features/DrawerNavigation";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export const Context = createContext();

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const currentSubjectData = {
    subject: currentSubject,
    setCurrentSubject: setCurrentSubject,
  };
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!latoLoaded) {
    return null;
  }

  return (
    <Context.Provider value={currentSubjectData}>
      <DrawerNavigation />
    </Context.Provider>
  );
}
