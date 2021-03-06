import React from "react";
import {
  StatusBar,
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  RefreshControl
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

import WordCard from "./WordCard";
// const translate = require('google-translate-api');

export default class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
    newText: "",
    cards: [],
    isFetching: false
  };
  

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  componentDidMount() {
    this._getCards();
  }

  _refresh = () => {
    this.setState({
      isFetching: true
    });
    console.log("refreshing...?");
    this._getCards();
  };

  _getCards = async () => {
    console.log("getting...");
    const cards = await this._callApi();

    this.setState({
      cards,
      isFetching: false
    });
  };

  _callApi = () => {
    return fetch("https://stormy-waters-25481.herokuapp.com/getCards")
      .then(response => response.json()) // only one attribute
      .then(json => json) // don't need return statement  '=>' automatically returns
      .catch(err => console.log(err));
  };

  render() {
    let datas = this.state.cards.Card;
    //console.log(datas)
    // if (this.props.navigation.state.params) {
    //   console.log(this.props.navigation.state.params);
    // }

    // if(datas){
    //   for (let i = 0; i < datas.length; i++) {
    //     translate('Ik spreek Engels', { to: this.props.navigation.state.params }).then(res => {
    //       datas[i]['translated_name'] = res.text;     
    //       // console.log(res.text);
    //       //=> I speak English 
    //       // console.log(res.from.language.iso);
    //       //=> nl 
    //     }).catch(err => {
    //       console.error(err);
    //     });
  
    //   }
    // }
    


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
            <View style={styles.topRight}>
              <Ionicons
                name={"ios-refresh-outline"}
                color={"skyblue"}
                size={40}
                onPress={() => this._refresh()}
                style={
                  marginRight = 5
                }
              />
              <Ionicons
                name={"ios-add"}
                color={"skyblue"}
                size={40}
                onPress={() => this.openModal()}
                style={
                  marginRight = 5
                }
              />
            </View>
          </Right>
        </Header>
        <Content padder scrollEnabled={false}>
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
                    this.closeModal();
                  }}
                >
                  <View style={styles.uploadBtn}>
                    <Text style={styles.uploadText}>Add!</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressOut={() => {
                    this.closeModal();
                    this._getCards();
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
              <Text>Welcome to SmartCards!!!</Text>
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

          {datas && <WordCard data={datas} />}
        </Content>
      </Container>
    );
  }

  _sendAction = text => {
    if (text !== "") {
      console.log("sending request! " + text);

      this.setState({
        newText: ""
      });
    }

    // TODO: API Call (POST)
    fetch(`https://stormy-waters-25481.herokuapp.com/1/card/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text
      })
    });
  };

  _onTextChange = text => {
    this.setState({
      newText: text
    });
  };
}
