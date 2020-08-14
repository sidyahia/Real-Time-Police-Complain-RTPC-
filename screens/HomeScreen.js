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
// import firebase from "firebase";
import Fire from "../Fire";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const firebase = require("firebase");
require("firebase/firestore");
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    email: "",
    displayName: "",
    errorMessage: null,
    text: "",
    location: null,
    image: null,
  };

  componentDidMount() {
    //const { email, displayName } = firebase.auth().currentUser;
    let Uemail = (firebase.auth().currentUser || {}).email;
    //this.setState({ email: Uemail });
    //alert(Uemail);
    if (Uemail == "admin@police.com") {
      this.props.navigation.navigate("Dash");
    }
    //this.getDashbord();
    this.getPhotoPermission();
    this.getLocationPermission();
  }
  getDashbord = () => {
    // if (this.state.email == "admin@police.com") {
    alert(this.state.email);
    // }
  };
  getPhotoPermission = async () => {
    if (Contants.platform.ios) {
      const { state } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != "granted") {
        alert("We need permission to access your camera roll");
      }
    } else if (Contants.platform.android) {
      const { state } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != "granted") {
        alert("We need permission to access your camera roll");
      }
    }
  };

  getLocationPermission = async () => {
    if (Contants.platform.ios) {
      const { state } = await Permissions.askAsync(Permissions.LOCATION);

      if (status != "granted") {
        alert("We need permission to access your location");
      }
    } else if (Contants.platform.android) {
      const { state } = await Permissions.askAsync(Permissions.LOCATION);

      if (status != "granted") {
        alert("We need permission to access your location");
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  signOutUser = () => {
    firebase.auth().signOut();
  };

  getLocation = async () => {
    let result = await Location.getCurrentPositionAsync({});

    if (!result.cancelled) {
      this.setState({ location: JSON.stringify(result) });
    }
  };

  handelPost = () => {
    if (
      this.state.text == " " ||
      this.state.image == null ||
      this.state.location == null
    ) {
      alert("Please Fill All Information First");
    } else {
      Fire.shared
        .addPost({
          text: this.state.text.trim(),
          localUri: this.state.image,
          location: this.state.location,
        })
        .then((ref) => {
          this.setState({ text: "", image: null, location: null });
          alert("Your Complain Has Been Submited Successfully!");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Hi {this.state.email}</Text>

      //   <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
      //     <Text>Logout</Text>
      //   </TouchableOpacity>
      // </View>
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.greeting}>Write Your Complain</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            {/* <Text style={styles.inputTitle}>Complain</Text> */}
            <TextInput
              style={styles.input}
              autoFocus={true}
              numberOfLines={4}
              placeholder="Write your complain"
              multiline={true}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            ></TextInput>
          </View>
          {/* <View style={{ marginTop: 32 }}>
            <TouchableOpacity onPress={this.getLocation}>
              <Text style={{ color: "#E9446A", fontWeight: "500", height: 40 }}>
                Get Location
              </Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View> */}

          <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
            <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.location} onPress={this.getLocation}>
            <MaterialIcons name="location-on" size={32} color="#D8D9DB" />
            {/* <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons> */}
          </TouchableOpacity>
          <Text>{this.state.location}</Text>
          <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
            <Image
              source={{ uri: this.state.image }}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handelPost}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={this.signOutUser}
        >
          <Text style={{ color: "#E9446A", fontWeight: "500" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
