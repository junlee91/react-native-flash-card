import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./components/index.js";

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return <HomeScreen />;
  }
}
