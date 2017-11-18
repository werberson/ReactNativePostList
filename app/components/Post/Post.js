import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Post = ({ post }) => (
  <View style={[styles.container, styles.shadowContainer]}>
    <View style={styles.header}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
