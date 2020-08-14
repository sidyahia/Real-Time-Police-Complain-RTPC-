import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import DashbordScreen from "./screens/DashbordScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDvaFtV38AzQ12qVywOM5oarn7Dlwt5YiI",
  authDomain: "rtpc-6d1bc.firebaseapp.com",
  databaseURL: "https://rtpc-6d1bc.firebaseio.com",
  projectId: "rtpc-6d1bc",
  storageBucket: "rtpc-6d1bc.appspot.com",
  messagingSenderId: "314177646696",
  appId: "1:314177646696:web:6acb357fdc131673690bdd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const DashStack = createStackNavigator({
  Dashbord: DashbordScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Dash: DashStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
