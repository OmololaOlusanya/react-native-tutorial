import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

export const LearnAboutModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onPress={() => setIsVisible(true)} title="Show Modal" />
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="fade"
        // presentationStyle="formSheet"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>This is a modal</Text>
          <Button onPress={() => setIsVisible(false)} title="Hide Modal" />
        </View>
      </Modal>
    </>
  );
};
