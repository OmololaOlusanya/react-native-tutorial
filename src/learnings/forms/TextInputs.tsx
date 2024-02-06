import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Switch } from 'react-native';

export const TextInputExample = () => {
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { minHeight: 100, textAlignVertical: 'top' }]}
        placeholder="Enter description"
        multiline
      />
      <Text>My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor="#f4f3f4"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
