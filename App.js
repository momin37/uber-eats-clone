import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderTabs from "./components/HeaderTabs";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderTabs />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
