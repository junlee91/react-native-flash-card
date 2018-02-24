import React from "react";
import { AppRegistry,Image, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["List0", "List1", "List2","List3"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}