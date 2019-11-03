
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, FlatList, ScrollView } from 'react-native';
import moment from 'moment';
import firebase from './firebase';

export default class AddScreen extends Component {
    

        constructor(props) {
          super(props)
      
          this.state = {
            exercise: '',
            activity: [],
            currentDate: new Date(),
            markedDate: moment(new Date()).format("YYYY-MM-DD")
          }
      
          this.create = this.create.bind(this);
        }
      
        componentDidMount() {
          firebase
            .database()
            .ref()
            .child("activity")
            .once("value", snapshot => {
              const data = snapshot.val()
              if (snapshot.val()) {
                const fitness = [];
                Object
                  .keys(data)
                  .forEach(exercise => fitness.push(data[exercise]));
                this.setState({
                    activity: fitness
                })
              }
            });
      
          firebase
            .database()
            .ref()
            .child("activity")
            .on("child_added", snapshot => {
              const data = snapshot.val();
              if (data) {
                this.setState(prevState => ({
                    activity: [data, ...prevState.activity]
                }))
              }
            })
      
        }
      
        //Create
        create (id, payload) {
          if (!this.state.exercise) return;
      
          const health = firebase.database().ref().child("activity").push();
          health.set(this.state.exercise, () => this.setState({exercise: ''}))
        }

        //delete
        // delete (id) {
        //     if (!this.state.exercise == '') return;
        
        //     const health = firebase.database().ref().child("activity").delete();
        //     health.set(this.state.exercise, (null) => this.setState({exercise: ''}))
        //   }
      
        render() {

            const today = this.state.currentDate;
            const day = moment(today).format("dddd");
            const date = moment(today).format("MMMM D, YYYY");

          return (
            <View style={styles.container}>
                <Text style={styles.title}> Workout List</Text>
                <View>
                    <Text style={styles.customDay}>{day} - {date}</Text>
                    

                </View>
              <View style={styles.container3}>

                <TextInput placeholder='Add your workout'
                  value={this.state.exercise}
                  onChangeText={(text) => this.setState({exercise: text})}
                  style={styles.customTextInput}/>
                <TouchableOpacity style={styles.addButton} title='Add' onPress={this.create}>
                <Text style={styles.logintext}>ADD</Text>
                </TouchableOpacity>
                
               
              </View>
              
              <ScrollView>
                <FlatList data={this.state.activity}
                    renderItem={
                        ({item}) => 
                        <View style={styles.ListContainer}>
                    <Text style={styles.ListItem}>
                      {item}
                    </Text>
                    {/* <Button title="Delete" onPress={this.delete}/> */}
                  </View>
                    }
                />
              </ScrollView>
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          marginTop:0,
        },
        container3: {
          flexDirection: 'row',
          padding: 20,
          backgroundColor: 'white',
          fontSize:16,
        },
        customTextInput: {
          flex: 1,
          fontSize:16,
          color:'#ffa500',
          width:200,
        height:50,
        textAlign: 'left',
        borderWidth:2,
        borderColor:'#ffa500',
        borderRadius:6,
        marginBottom:0,
        padding:4,
        fontSize:20,
        },
        ListContainer: {
          
          margin: 5,
          borderRadius: 5,
          color:'white',
          backgroundColor:'#ffedcc',
        },
        ListItem: {
          fontSize: 20,
          padding: 10
        },
        title: {
          marginVertical:20,
        fontSize:60,
        textAlign:'center',
        
        },
        customDay:{
            fontSize: 20,
            color: '#ffa500',
            textAlign:'center',
            fontWeight:'bold',
        },
         addButton: {
            width:70,
            height:50,
            backgroundColor:'#ffa500',
            fontSize:20,
            paddingHorizontal:10,
            marginTop:0,
            borderRadius:6,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:8,
    },
    logintext:{
        color:'blue',
        fontSize:18,
        justifyContent: 'center',
        alignItems: 'center',
    },

      });