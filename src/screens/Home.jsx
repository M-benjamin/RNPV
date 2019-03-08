import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Home Screen </Text>
        <Button
          title="Go to user"
          onPress={() => navigation.navigate("User")}
        />
      </View>
    );
  }
}

export default HomeScreen;
