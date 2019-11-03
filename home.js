

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ListItem, ActivityIndicator, List, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
export default class AddScreen extends Component {
     db = firebase.firestore();


     constructor() {
        super();
        this.ref = firebase.firestore().collection('workoutDay');
        this.unsubscribe = null;
        this.state = {
          isLoading: true,
          workoutDay: []
        };
      }
      onCollectionUpdate = (querySnapshot) => {
        const workoutDay = [];
        querySnapshot.forEach((doc) => {
          const {item, minutes } = doc.data();
          workoutDay.push({
            key: doc.id,
            doc, // DocumentSnapshot
            item,
            minutes,
           
          });
        });
        this.setState({
          workoutDay,
          isLoading: false,
       });
      }
     
    
    
       
    render() {
      

      return (
          <View>
              <View>
                  <Text style={styles.heading}>Hello Anne</Text>
              </View>
            <View>
                <ImageBackground style={styles.featuredcard} source={ require('./assets/fitness3.jpg')}>
                    <View>
                        <Text style={styles.topText}>HIKING</Text>
                    </View>
                </ImageBackground>
            </View>
             <View>
                <Text style={styles.subheading}> Training</Text>
            </View>

                <View style={styles.cardcontainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/fitness1.jpg')}/>
                            <Text style={styles.minicardtext}>Yoga</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/fitness2.jpg')}/>
                            <Text style={styles.minicardtext}>weight</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/fitness4.jpg')}/>
                            <Text style={styles.minicardtext}>Running</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/fitness3.jpg')}/>
                            <Text style={styles.minicardtext}>hiking</Text>
                        </View>
                    </ScrollView>
                </View>  

       
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
    },
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:7,
        marginVertical:0,
        marginHorizontal:20,
    }, 
    mediumcardimage: {
        margin:0,
        flex: 1,
        padding:0,
        marginTop:15,
        marginLeft:20,
        marginRight:0,
        backgroundColor: 'red',
        resizeMode: 'cover',
        width: 150,
        height:150,
        borderRadius:5,
    },
    minicardtext: {
        flex: 1,
        marginTop:0,
        margin:15,
        marginLeft:20,
        marginVertical:10,
        fontWeight: '600',
        fontSize:15,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    cardcontainer: {
        flexDirection: 'column',
        paddingRight:0,
        height:200,
       
    },
    featuredcard: {
        
        margin:15,
        marginTop:10,
        borderRadius:10,
        alignItems: 'center',
        marginHorizontal:20,
        paddingHorizontal:15,
        paddingVertical:12,
        width:375,
        height:350,
        resizeMode: 'cover',
    },
    heading: {
        color:'#ffa500',
        fontSize:40,
        fontWeight:'500',
        marginLeft:20,
        marginVertical:10,

    }, 
    topText:{
        color:'white',
        fontWeight:'800',
        fontSize:80,
        fontFamily:'AvenirNext-Heavy',
    }
});