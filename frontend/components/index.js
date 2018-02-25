import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;