import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import LandingPageScreen from "../screens/LandingPageScreen";
import LoadingScreen from "./../screens/LoadingScreen";
import RegisterScreen from './../screens/RegisterScreen';
import HomeScreen from './../screens/HomeScreen';
import ArenaScreen from './../screens/ArenaScreen'
import RestaurantScreen from '../screens/RestaurantScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const AppStack = createStackNavigator({
    LandingPage: LandingPageScreen,
    Home: HomeScreen,
    Arena: ArenaScreen,
    Restaurant: RestaurantScreen,
    Checkout: CheckoutScreen
});

const AuthStack = createStackNavigator({
    LandingPage: LandingPageScreen,
    Register: RegisterScreen
})

export default createAppContainer(
    createSwitchNavigator({
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Loading: LoadingScreen,
      Landing: LandingPageScreen,
      Arena: ArenaScreen,
      Home: HomeScreen,
      Restaurant: RestaurantScreen,
      Register: RegisterScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
  );