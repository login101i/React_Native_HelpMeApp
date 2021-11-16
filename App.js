import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
