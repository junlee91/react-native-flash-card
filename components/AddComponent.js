import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

class AddComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formRow}>
          <TextInput
            placeholder={"Enter"}
            style={styles.input}
            placeholderTextColor={"#888"}
            autoCapitalize={"none"}
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.uploadBtn}>
            <Text style={styles.uploadText}>Enter Text</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  formRow: {
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15
  },
  input: {
    flex: 1
  },
  uploadBtn: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: width / 2,
    height: 50,
    backgroundColor: "#3E99EE",
    borderRadius: 25,
    overflow: "hidden"
  },
  uploadText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  }
});

export default AddComponent;
