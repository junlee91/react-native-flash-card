import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      category:"basic"
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
             <CardItem header>
              <Text>Welcome to FlashCard!!!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  We are here to help you learn languages with flashcards. 
                  Go explore our flashcards library and you can also add your own cards.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
