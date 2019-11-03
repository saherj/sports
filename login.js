import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TextInput, TouchableOpacity } from 'react-native';
import { white } from 'react-native-paper';
import LottieView from "lottie-react-native";


export default class LoginScreen extends Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
      }
      resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
      };
    state = {
        Email: '',
        Password: ''
      };


  render() {
      return (
          <View style={styles.container}>
            <View style={styles.animationContainer}>
                <LottieView
                    ref={animation => {
                    this.animation = animation;
                }}
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'white',
                    }}
                    source={require('./assets/jump-rope-girl.json')}
                   />
            </View>
            <View style={styles.container}>
            <Text style={styles.appTitle}>Workout App</Text>
            <TextInput
                style={styles.customInput}
                placeholder='Email'
                value={this.state.Email}
                onChangeText={Email => this.setState({ Email })}
            />
            <TextInput
                style={styles.customInput}
                placeholder='Password'
                value={this.state.Password}
                onChangeText={Password => this.setState({ Password })}
            />
            
            <TouchableOpacity 
              style={styles.loginButton}
              onPress = {() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.logintext} >LOGIN</Text>
            </TouchableOpacity>
              
              
            

            </View> 
              
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    customInput: {
        width:350,
        height:60,
        borderBottomWidth:2,
        borderBottomColor:'#ffa500',
        borderRadius:6,
        color:'blue',
        fontSize:17,
    },
    loginButton: {
        width:350,
        height:50,
        backgroundColor:'#ffa500',
        fontSize:20,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:6,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    logintext:{
        color:'blue',
        fontSize:25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animationContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop:0,
        
      },
      appTitle:{
          color:'#ffa500',
          fontSize:40,
          fontWeight:'600',
          textAlign: 'center',
          fontFamily: 'Georgia-BoldItalic',
      },
});