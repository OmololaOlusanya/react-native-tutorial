import React from 'react';
import { Pressable, Text } from 'react-native';

export const CustomButton = ({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}) => {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: 'lightblue' }}>
      <Text style={{ color: 'blue' }}>{text}</Text>
    </Pressable>
  );
};
