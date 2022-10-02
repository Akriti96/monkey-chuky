import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import { Audio } from 'expo-av';
export default class PhonicSound extends React.Component {
  playsound = async (mychunk) => {
    console.log(mychunk);
    var soundlink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + mychunk + '.mp3';
    await Audio.Sound.createAsync({ uri: soundlink }, { shouldPlay: true });
  };
  constructor(props) {
    super(props);
    this.state = {
    PressButtonindex:""
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity
         style={
           this.props.Buttonindex===this.state.PressButtonindex?
           [styles.chunkbutton,{backgroundColor:"green"}]:
           [styles.chunkbutton,{backgroundColor:"red"}]
         }
          onPress={() => {
            this.setState({
              PressButtonindex:this.props.Buttonindex
            })
            this.playsound(this.props.soundchunk);
          }}>
          <Text style={styles.chunkbuttonText}>{this.props.wordchunk}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chunkbutton: {
    width: '60%',
    height: '50%',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  chunkbuttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
