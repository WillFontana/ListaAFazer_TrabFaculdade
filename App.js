import { StatusBar } from "expo-status-bar";
import React from "react";
import moment from "moment";
import { StyleSheet, View } from "react-native";
import MainView from "./views/MainView";

moment.locale("pt-br");

export default function App() {
  return (
    <View style={styles.container}>
      <MainView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
