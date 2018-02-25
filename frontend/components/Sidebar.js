import React from "react";
import { Platform, AppRegistry, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Icon, Header } from "native-base";


const routes = ["List0000", "List1111", "List2222","List3333"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
         <Icon name='logo-buffer' style={{marginTop: "20%", marginBottom: "10%", textAlign: 'center' }}>FlashCard</Icon>
          <Text style={{fontSize:20,fontFamily:Platform.OS === 'ios'? "AmericanTypewriter-Light":"Roboto" ,  color:"white", paddingLeft:"3%", paddingTop:"3%",paddingBottom:"3%",  backgroundColor: 'black' }}>Category</Text>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem color="#841584"
                  button
                  onPress={() => this.props.navigation.navigate("WordCard",{ category: data })}>
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