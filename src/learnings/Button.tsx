import React from 'react';
import { Button } from 'react-native';

export const LearnAboutButton = () => {
  return (
    <Button
      title="Press"
      onPress={() => console.log('bButton pressed')}
      color="midnightblue"
    ></Button>
  );
};
