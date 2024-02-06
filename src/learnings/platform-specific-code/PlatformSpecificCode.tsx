import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export const PlatformSpecificCode = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    paddingTop: Platform.OS == 'android' ? 25 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { ...Platform.select({ ios: { color: 'red' }, android:{} }), fontSize: 24 },
});
