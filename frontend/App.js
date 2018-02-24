
import React, { Component, StyleSheet } from "react";
import Expo from "expo";
import HomeScreen from "./components/index.js";
import WordCard from "./components/WordCard";
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';


export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Container word="Hello, I am alpaca" style={{marginTop: 150
        }}>
        <WordCard/>
      </Container>
    );
  }
}