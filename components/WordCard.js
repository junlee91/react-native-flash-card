import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';

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
      <Card style={styles.card} >
        <CardItem cardBody style={styles.cardBody}>
          <Text> this.props.word </Text>
          <Image style={styles.image} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rose_Hill_Farm_Alpaca_01.jpg/1200px-Rose_Hill_Farm_Alpaca_01.jpg' }} />
        </CardItem>
        {/* <CardItem button style={styles.cardFooter} onPress={this.buttonOnPress}>
          <Text style={styles.footerText}>{this.props.name}</Text>
          <Button transparent={true} style={styles.button} onPress={this.buttonOnPress}>
            <Icon name="info-circle" style={styles.icon} />
          </Button>
        </CardItem> */}
      </Card>

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

  picStyle: {
    // display: none,
    width: 400,
    height: 400

  },

  picStyle_n: {
    display: 'none',

  },
  card: {
    elevation: 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  cardFooter: {
    justifyContent: 'space-between'
  },
  footerText: {
    color: 'grey',
  },
  image: {
    height: cardHeight,
    flex: 1
  },
  button: { height: 30 },
  icon: {
    color: '#C3BFBF',
    fontSize: 25
  }


})