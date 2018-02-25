import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DeckSwiper, Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';
const cards = [
  {
    name: "alpaca",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rose_Hill_Farm_Alpaca_01.jpg/1200px-Rose_Hill_Farm_Alpaca_01.jpg"
  },
  {
    name: "llama",
    image_url: "http://news.blr.com/app/uploads/sites/3/2016/10/Llama-1.jpg"
  },
  {
    name: "panda",
    image_url: "http://www.dw.com/image/36940534_401.jpg"
  },
];

export default class CardContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      picDisplay: false
    };
  }

  tapToSwitch = () => {
    this.setState({
      picDisplay: !this.state.picDisplay,
    });
  }

  picDisplayFalse = () => {
    console.log("Clicked!")
    this.setState({
      picDisplay: false,
    });
  }



  render() {
    const datas = this.props;
    
    if(datas.data.length === 0){
      return <Text>Loading..</Text>
    }

    //console.log(datas.data);

    return (
      <DeckSwiper
        onSwipeRight={this.picDisplayFalse}
        onSwipeLeft={this.picDisplayFalse}
        dataSource={cards}
        renderItem={item =>
          <TouchableOpacity activeOpacity={1} onPress={this.tapToSwitch}>
            <Card style={styles.card}>
              <CardItem cardBody>

                <Text style={styles.wordStyle}>{item.name}</Text>
                <Image style={this.state.picDisplay ? styles.picStyle : styles.picStyle_n} source={{ uri: item.image_url }} />
              
              </CardItem>
            </Card>
          </TouchableOpacity>


        }
      />
    );
  }
}

const styles = StyleSheet.create({
  wordStyle: {
    flex: 1,
    backgroundColor: '#f8f8f8f8',
    zIndex: 2,
    fontSize: 50,
    textAlign: 'center',
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 120,
    paddingBottom: 120,
    // overflow: 'hidden',  
  },
  // container: {
  // alignItems: 'stretch',
  // justifyContent: 'center',
  // },
  picStyle: {
    // display: none,
    flex: 0,
    left: -280,
    alignSelf: 'flex-start',
    zIndex: 3,
    // flexGrow: 1,
    width: 450,
    height: 305,
    overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  picStyle_n: {
    display: 'none',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
})