import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Contants from "expo-constants";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
// import Fire from "../Fire";
// import * as ImagePicker from "expo-image-picker";
// import { MaterialIcons } from "@expo/vector-icons";
// import * as Location from "expo-location";

// const firebase = require("firebase");
require("firebase/firestore");
export default class DashbordScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    complain: [],
  };

  constructor(props) {
    super(props);
    this.subsciber = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((docs) => {
        let complain = [];
        docs.forEach((doc) => {
          complain.push(doc.data());
        });
        this.setState({ complain });
      });
  }

  // getUrl = () => {

  // }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.greeting}>{"Dashbord"}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View>
          {this.state.complain.map((com, index) => (
            <View style={{ marginTop: 32 }} key={index}>
              <Text>{com.uid}</Text>
              <Text>{com.text}</Text>
              <Text>{com.location}</Text>
              <Text>{com.image}</Text>
              {/* <Image
                source={{ uri: com.image }}
                style={{ width: "100%", height: "100%" }}
              ></Image> */}
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={this.signOutUser}
        >
          <Text style={{ color: "#E9446A", fontWeight: "500" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // get firestore() {
  //   return firebase.firestore();
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "red",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
    marginTop: 40,
  },
  location: {
    alignItems: "flex-end",
    marginHorizontal: 80,
    marginTop: -32,
  },
});
