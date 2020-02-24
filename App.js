import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Parse from 'parse';
import {APP_KEY, JS_KEY, BASE_URL} from './configs';
import SignIn from './components/Auth/SignIn';
import Home from './components/home';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SignIn:{ screen:SignIn}
});


export default class App extends Component {

  constructor(props) {
    super(props);
    // TODO don't forget to add your app and js ids
    Parse.initialize(APP_KEY, JS_KEY);
    Parse.serverURL = BASE_URL;
  }
  render(){
   
    return (
      <View style={styles.container}>
         <AppNavigator/>
      </View> 
    )
   
  };
}
const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
