import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";
import Fire from "../Fire";

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // if (user != null) {
      //   if (user.email != null && user.email == "admin@police.com") {
      //     this.props.navigation.navigate("Dash");
      //   } else {
      //     this.props.navigation.navigate(user ? "App" : "Auth");
      //   }
      // } else {
      //   this.props.navigation.navigate(user ? "App" : "Auth");
      // }
      // this.props.navigation.navigate(
      //   user ? (user.email  != null ? "admin@police.com" ? "Dash" : "App") : "Auth"
      // this.props.navigation.navigate(
      //   user ? (user.email ? "App" : "Auth") : "Auth"
      // );
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
