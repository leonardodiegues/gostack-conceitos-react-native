import React from 'react';
import { View, Text } from "react-native";

import Button from './Button';

export default function Repository(props) {
  const { repository, style, addLikes } = props;
  const { id, title, techs, likes } = repository;

  const likesText = `${likes} curtida`;

  if (likes > 1) {
    likesText += 's';
  }

  return(
    <>
      <View style={style.repositoryContainer} key={`repository-container-${id}`}>
        <Text style={style.repository} key={`repository-title-${id}`}>{title}</Text>
        <View style={style.techsContainer}>
          {techs.map((tech, index) => (
            <Text
              style={style.tech}
              testID={`repository-tech-${id}-${index}`}
              key={`repository-tech-${id}-${index}`}
            >
              {tech}
            </Text>
          ))}
        </View>
        <View style={style.likesContainer}>
          <Text
            style={style.likeText}
            testID={`repository-likes-${id}`}
            key={`repository-likes-${id}`}
          >
            {likesText}
          </Text>
        </View>
        <Button
          id={id}
          style={style}
          callback={addLikes}
        />
      </View>
    </>
  );
}
