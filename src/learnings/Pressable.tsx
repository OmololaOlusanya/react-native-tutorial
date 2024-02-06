import React from 'react';
import { Pressable, Text } from 'react-native';

export const LearnAboutPressable = () => {
  return (
    <Pressable onPress={()=>console.log('Pressed')}>
      <Text>Press me</Text>
    </Pressable>
  );
};
