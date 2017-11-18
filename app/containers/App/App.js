import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';

export default class App extends Component<{}> {
  state = {
    posts: [
      {
        id: Math.random(),
        author: 'Diego Schell Fernandes',
        title: 'Aprendendo React Native',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.',
      },
      {
        id: Math.random(),
        author: 'Diego Schell Fernandes',
        title: 'Aprendendo React Native',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.',
      },
      {
        id: Math.random(),
        author: 'Diego Schell Fernandes',
        title: 'Aprendendo React Native',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.',
      },
      {
        id: Math.random(),
        author: 'Diego Schell Fernandes',
        title: 'Aprendendo React Native',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.',
      },
      {
        id: Math.random(),
        author: 'Diego Schell Fernandes',
        title: 'Aprendendo React Native',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNative App" />
        <ScrollView>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}
