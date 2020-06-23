import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function RepositoryLikeButton(props) {
  const { id, style, callback } = props;

  return(
    <TouchableOpacity
      style={style.button}
      onPress={() => callback(id)}
      testID={`like-button-${id}`}
      key={`like-button-${id}`}
    >
      <Text style={style.buttonText}>Curtir</Text>
    </TouchableOpacity>
  );
}

