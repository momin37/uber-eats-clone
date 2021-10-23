import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  console.log(activeTab);

  return (
    <View style={styles.headerTabs}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickups"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.btnColor,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.textColor, fontSize: 15, fontWeight: "900" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
