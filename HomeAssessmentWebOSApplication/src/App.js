import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/routes'
import {
  AppRegistry,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { styles } from './styles'
import { enableScreens } from 'react-native-screens';
enableScreens();


export default class App extends React.Component {
  render() {
    return (
        
        <div><h1>MERHABA</h1></div>
        
    );
  }
}


const Stack = createNativeStackNavigator();