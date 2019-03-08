import React, { Component } from "react";
import { Button, Image, NativeModules } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";

export default class sHome extends Component {
  state = {
    on: false
  };

  toggle = () => {
    NativeModules.VPN.connect();
    this.setState({ on: !this.state.on });
  };

  render() {
    const { navigation } = this.props;
    const { on } = this.state;

    return (
      <Container>
        <Title>_ {NativeModules.VPN.appName} _ </Title>
        <Image
          style={{ width: 200, height: 200 }}
          // source={require("../../assets/icns.vpn.png")}
        />
        <Button
          title="check user profile"
          onPress={() => navigation.navigate("User")}
        />
        <Button
          title={`VPN ${on === false ? "OFF" : "ON"}`}
          color={on === false ? "red" : "green"}
          onPress={this.toggle}
        />
      </Container>
    );
  }
}
