import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class LoginScreen extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>LOGIN Screen</Text>
              <Button onPress = {
                  () =>
                  this.props.navigation.navigate('About')
              }
              title="press me"></Button>
              
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});