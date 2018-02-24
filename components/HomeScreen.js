import React from "react";
import {
  StatusBar,
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import AddComponent from "./AddComponent";

export default class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
    newText: ""
  };

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Ionicons
              name={"ios-add"}
              color={"skyblue"}
              size={40}
              onPress={() => this.openModal()}
            />
          </Right>
        </Header>

        <Content padder>
          <Modal
            visible={this.state.modalVisible}
            animationType={"slide"}
            onRequestClose={() => this.closeModal()}
          >
            <StatusBar hidden={true} />
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
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
                      this.state.newText
                        ? this._sendAction(this.state.newText)
                        : Alert.alert("Input field is required!");
                    }
                    () => {
                      {this.state.newText && this.closeModal()}
                    }
                  }}
                >
                  <View style={styles.uploadBtn}>
                    <Text style={styles.uploadText}>Add!</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressOut={() => {
                    this.closeModal();
                  }}
                >
                  <View style={styles.calcelBtn}>
                    <Text style={styles.uploadText}>Cancel!</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Card>
            <CardItem header>
              <Text>Welcome to FlashCard!!!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  We are here to help you learn languages with flashcards. Go
                  explore our flashcards library and you can also add your own
                  cards.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  _sendAction = text => {
    if (text !== "") {
      console.log("sending request! " + text);
    }

    // TODO: API Call (POST)
  };

  _onTextChange = text => {
    this.setState({
      newText: text
    });
  };
}
