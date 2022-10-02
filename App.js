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
import PhonicSound from './phonicsound';

// console.log(db['the'].phones);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mytext: '',
      display: '',
      chunks: [],
      phonics: [],
    };
  }
  render() {
    return (
      <View>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'MONKEY CHUNKY',
            style: { fontSize: 20, fontWeight: 'bold', color: 'white' },
          }}></Header>
        <Image
          source={{
            uri: 'https://media.cdnandroid.com/item_images/1098043/imagen-phonics-reading-games-for-kids-spelling-apps-0thumb.jpeg',
          }}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: 30,
          }}></Image>
        <TextInput
          style={styles.textinput}
          placeholder={'ENTER THE TEXT HERE'}
          placeholderTextColor={'red'}
          onChangeText={(text) => {
            this.setState({
              mytext: text,
            });
          }}
          value={this.state.mytext}></TextInput>
        <TouchableOpacity
          style={styles.gobutton}
          onPress={() => {
            var word = this.state.mytext.toLowerCase().trim();
            db[word]
              ? this.setState({
                  chunks: db[word].chunks,
                  phonics: db[word].phones,
                })
              : alert('This word is not available in local db');
            console.log(this.state.chunks);
            word=[]
          }}>
          <Text> Go</Text>
        </TouchableOpacity>

        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSound
                wordchunk={this.state.chunks[index]}
                soundchunk={this.state.phonics[index]}
                Buttonindex={index}
              />
            );
          })}
        </View>

        <Text></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    marginTop: 30,
    width: 200,
    alignSelf: 'center',
    height: 40,
    borderWidth: 4,
    textAlign: 'center',
    borderRadius: 20,
  },
  gobutton: {
    backgroundColor: 'aqua',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
});
