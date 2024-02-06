import React from 'react';
import { Button, Alert} from 'react-native';

export const LearnAboutAlert = () => {
  return (
    <>
      <Button
        onPress={() => Alert.alert('Invalid', 'DOB Incorrect')}
        title="Show Alert"
      />
      <Button
        onPress={() =>
          Alert.alert('Invalid', 'DOB Incorrect', [
            { text: 'Cancel', onPress: () => console.log('Cancel') },
            { text: 'Ok', onPress: () => console.log('Ok') },
          ])
        }
        title="Show Alert 2"
      />
    </>
  );
};
