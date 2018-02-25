import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  DeckSwiper,
  Container,
  Header,
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Toast,
  Button
} from "native-base";
import FlipCard from "react-native-flip-card";

// Dummy Test Data
const cards = [
  {
    name: "alpaca",
    image_url:
      "http://www.colosseumpretoria.com/wp-content/uploads/2017/10/livechicken_3.jpg"
  },
  {
    name: "llama",
    image_url:
      "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg"
  },
  {
    name: "panda",
    image_url:
      "https://cdn.modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts.jpg"
  }
];

export default class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picDisplay: false,
      translated_name: "",
      show: false
    };
  }

  tapToSwitch = text => {
    console.log("tap! " + text);
    this.setState({
      picDisplay: !this.state.picDisplay,
      translated_name: text
    });
  };

  picDisplayFalse = () => {
    console.log("Clicked!");
    this.setState({
      picDisplay: false
    });
  };

  render() {
    const datas = this.props;

    if (datas.data.length === 0) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    //console.log(datas.data);

    return (
      <Container>
        <View style={styles.swiper}>
          <DeckSwiper
            onSwipeRight={this.picDisplayFalse}
            onSwipeLeft={this.picDisplayFalse}
            dataSource={datas.data}
            renderItem={item => (
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.tapToSwitch(item.translated_name)}
                >
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Text style={styles.wordStyle}>{item.name}</Text>
                      <Image
                        style={
                          this.state.picDisplay
                            ? styles.picStyle_n
                            : styles.picStyle
                        }
                        source={{ uri: item.img_url }}
                      />
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {this.state.picDisplay && (
          <FlipCard
            style={{
              flex: 1
            }}
          >
            {/* Face Side */}
            <View style={styles.face}>
              <Text>Translate!</Text>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
              <Text>{this.state.translated_name}</Text>
            </View>
          </FlipCard>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  swiper: {
    marginTop: 10
  },
  wordStyle: {
    flex: 1,
    backgroundColor: "#f8f8f8f8",
    zIndex: 2,
    fontSize: 30,
    textAlign: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 120,
    paddingBottom: 120
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
    alignSelf: "flex-start",
    zIndex: 3,
    // flexGrow: 1,
    width: 450,
    height: 305,
    overflow: "hidden",
    resizeMode: "contain"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  picStyle_n: {
    display: "none"
  },
  card: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 10
  },
  flipCard: {
    flex: 1,
    borderWidth: 1,
    height: 50
  },
  face: {
    flex: 1,
    alignSelf: "center"
  },
  back: {
    flex: 1,
    alignSelf: "center"
  }
});
