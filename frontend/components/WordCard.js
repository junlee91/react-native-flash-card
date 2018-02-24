import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { DeckSwiper, Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';
const cards = [
  { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rose_Hill_Farm_Alpaca_01.jpg/1200px-Rose_Hill_Farm_Alpaca_01.jpg" },
  { uri: "http://news.blr.com/app/uploads/sites/3/2016/10/Llama-1.jpg" },
  { uri: "http://www.dw.com/image/36940534_401.jpg" },
];
export default class CardContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      picDisplay: false
    };
  }



  tapToSwitch = () => {
    console.log("asdasdasd");
    this.setState({
      picDisplay: !this.state.picDisplay,
    });
  }

  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: item.uri}} />
                <Body>
                  <Text>Hiiiii</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={styles.picStyle} source={{uri: item.uri}} />
            </CardItem>
          </Card>


          // <Card style={styles.card} >
          //   <CardItem cardBody style={styles.cardBody}>
          //     <Body>
          //       <Text> {this.props.word} </Text>
          //       <Image style={styles.picStyle} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rose_Hill_Farm_Alpaca_01.jpg/1200px-Rose_Hill_Farm_Alpaca_01.jpg' }} />
          //     </Body>
          //   </CardItem>
          // </Card>


        }
      />


    );
  }
}

const styles = StyleSheet.create({
  wordStyle: {
    // display: none,    
  },
  wordStyle_n: {
    display: 'none',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  picStyle: {
    // display: none,
    flexGrow: 1,
    width: 330,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picStyle_n: {
    display: 'none',

  },
  card: {
    elevation: 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    height: 30,
    flex: 1
  },
  button: { height: 30 },
})