/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { Component }from 'react';
import {
  StyleSheet,
TextInput,
  View,Button,
  Text
 } from 'react-native';

 import { Provider } from 'react-redux';
import { ListItem} from './app/components/ListItem';
import { LoadingScreen} from './app/components/LoadingScreen';
import { Home } from './app/components/Home';
import Router from './app/components/index'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './app/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
           <Router />
            </Provider>
        );
    }
}
