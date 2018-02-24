import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Alert
} from "react-native";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";

const { width, height } = Dimensions.get("window");

class AddComponent extends Component {
  state = {
    newText: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Insert Button"
          onPress={() => {
            this.popupDialog.show();
          }}
        />

        <PopupDialog
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
          width={250}
          height={150}
          justifyContent={"center"}
        >
          <View style={styles.formRow}>
            <TextInput
              value={this.state.newText}
              placeholder={"Input"}
              style={styles.input}
              placeholderTextColor={"#888"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={this._onTextChange}
            />
          </View>

          <TouchableOpacity
            onPressOut={() => {
              {
                this.state.newText && this.popupDialog.dismiss();
              }
              this._sendAction(this.state.newText);
            }}
          >
            <View style={styles.uploadBtn}>
              <Text style={styles.uploadText}>Send!</Text>
            </View>
          </TouchableOpacity>
        </PopupDialog>
      </View>
    );
  }

  _sendAction = text => {
    if (text === "") {
      Alert.alert("Field required!");
      return;
    }

    console.log("sending request! " + text);
  };

  _onTextChange = text => {
    this.setState({
      newText: text
    });
  };
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
  },
  dialog: {
    justifyContent: "center"
  }
});

const slideAnimation = new SlideAnimation({
  slideFrom: "bottom"
});

export default AddComponent;
