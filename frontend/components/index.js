import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import WordCardScreen from "./WordCard.js";
import SideBar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    WordCard:{screen: WordCardScreen}
  },
  {
    contentComponent: props => <SideBar {...props}/>,
    navigationOptions: ({navigation}) => ({
      drawerLockMode: 'locked-closed'
    })
  }
);
export default HomeScreenRouter;