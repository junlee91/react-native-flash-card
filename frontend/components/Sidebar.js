import React from "react";
import { Platform, AppRegistry, StyleSheet, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Icon, Header } from "native-base";


const routes = ["List0000", "List1111", "List2222","List3333"];



export default class SideBar extends React.Component {
  constructor(){
    super();
    this.state = {
      categories:[]
    }
  }


  componentDidMount(){
    this._getCategories();
  }

  _getCategories = async() =>{
    const categories = await this._callApi();
    this.setState({
      categories
    })
  }

  _callApi = ()=>{
    return fetch("https://stormy-waters-25481.herokuapp.com/getCategories")
          .then(response => response.json())
          .then(json => json.Category)
          .catch(err=>console.log(err))
  }


  render() {
    console.log(this.state.categories);
    return (
      <Container>
        <Content>
         <Icon name='logo-buffer' style={styles.icon}>FlashCard</Icon>
          <Text style={styles.category}>Category</Text>
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

const styles = StyleSheet.create({
  icon: {
    marginTop: "20%", 
    marginBottom: "10%", 
    textAlign: "center"
  },
  category: {
    fontSize:20,fontFamily:Platform.OS === 'ios'? "AmericanTypewriter-Light":"normal" ,  
    color:"white", 
    paddingLeft:"3%", 
    paddingTop:"3%",
    paddingBottom:"3%",  
    backgroundColor: 'black' 
  },
});