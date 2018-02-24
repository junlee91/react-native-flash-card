import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AddComponent from "./components/AddComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
