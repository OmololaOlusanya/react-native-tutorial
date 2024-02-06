import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!name) errors['name'] = 'Username is required';
    if (!password) errors['password'] = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submited', name, password);
      setName('');
      setPassword('');
      setErrors({});
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ paddingHorizontal: 16 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
      behavior="padding"
    >
      <View style={styles.form}>
        <Image
          source={require('../../../assets/adaptive-icon.png')}
          style={{
            width: 200,
            height: 400,
            alignSelf: 'center',
            marginBottom: 50,
          }}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter your name"
          onChangeText={setName}
        />
        {errors['name'] && (
          <Text style={styles.errorText}>{errors['name']}</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors['password'] && (
          <Text style={styles.errorText}>{errors['password']}</Text>
        )}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
