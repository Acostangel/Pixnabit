import React, {Component} from 'react';
import { View,  Button,
  TextInput,
  StyleSheet,
Image } from 'react-native';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password } = this.state;
    try {
      // here place your signup logic
     // console.log('user successfully signed up!: ', success);
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
  render(){

    return (
      <View style={styles.container}>
      <Image source={{uri: './logologingregister.png'}} style={{width: 40, height: 40}} />
         
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor={styles.placeholder.color}
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor={styles.placeholder.color}
          onChangeText={val => this.onChangeText('password', val)}
        />
        <View style={[{ width: "90%", margin: 10 }]}>
          <Button
            color='#f4cd6f'
            title='LOGING'
            onPress={this.signUp}
          />
        </View>
        <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          color='#f4cd6f'
          title='CREATE ACCOUNT'
          onPress={this.signUp}
        />
        </View>
      </View>
    )
   
  };
}
const styles = StyleSheet.create({
  placeholder:{color:'#f4cd6f' },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 8,
    color: '#f4cd6f',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {width:50},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})