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
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: 'lightblue',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
      }}
    >
      <Text style={{ color: 'purple' }}>{text}</Text>
    </Pressable>
  );
};
