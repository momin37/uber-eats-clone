import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <View style={{ backgroundColor: "white", padding: 15 }}>
      <HeaderTabs />
      <SearchBar />
    </View>
  );
}
