/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import BuyCoins from './src/screens/BuyCoins'

Navigation.registerComponent('BuyCoins', () => BuyCoins)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'BuyCoins', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
  },
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
})

//AppRegistry.registerComponent('BuyCoins', () => BuyCoins);
