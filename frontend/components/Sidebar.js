import React from "react";
import { Platform, AppRegistry, StyleSheet, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Icon, Header } from "native-base";


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
          .then((json) => {
            let categories = [];
            for(let i in json.Category){
              categories.push(json.Category[i].name);
            }
            return categories
          })
          .catch(err=>console.log(err))
  }


  render() {
    
    return (
      <Container>
        <Content>
         <Icon name='logo-buffer' style={styles.icon}>FlashCard</Icon>
          <Text style={styles.category}>Category</Text>
          <List
            dataArray={this.state.categories}
            renderRow={data => {
              return (
                <ListItem color="#841584"
                  button
                  onPress={() => this.props.navigation.navigate("Home",{ category: data })}>
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