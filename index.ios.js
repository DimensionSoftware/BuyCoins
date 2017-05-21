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
import Pay from './src/screens/Pay'
import History from './src/screens/History'

global.config = require('./config')

Navigation.registerComponent('Pay', () => Pay)
Navigation.registerComponent('History', () => History)

const tabs = [{
  label: 'Pay',
  screen: 'Pay',
  /* icon: require('../img/list.png'),*/
  title: 'Pay Coins',
}, {
  label: 'History',
  screen: 'History',
  /* icon: require('../img/swap.png'),*/
  title: 'History',
}];

Navigation.startTabBasedApp({
  tabs,
  tabsStyle: {
    tabBarBackgroundColor: '#eee',
    tabBarButtonColor: config.textColor,
    tabBarSelectedButtonColor: config.themeColor,
  },
  appStyle: {
    tabBarSelectedButtonColor: config.themeColor,
    navBarBackgroundColor: '#aaa',
  },
})
