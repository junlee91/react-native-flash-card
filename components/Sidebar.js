import React from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Icon, Header } from "native-base";


const routes = ["List0000", "List1111", "List2222","List3333"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor: 'steelblue'}}>
         <Icon name='logo-buffer' style={{marginTop: "20%", marginBottom: "10%", textAlign: 'center' }}>FlashCard</Icon>
          <Text style={{fontSize:20,fontFamily:"AmericanTypewriter-Light",  color:"white", paddingLeft:"3%", paddingTop:"3%",paddingBottom:"3%",  backgroundColor: 'black' }}>Category</Text>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Home")}>
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