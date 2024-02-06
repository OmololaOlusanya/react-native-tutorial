import React from 'react';
import pokermonList from '../../../data.json';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export const List = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      {pokermonList.map(({ id, name, type }) => (
        <View key={id} style={styles.card}>
          <Text style={styles.cardText}>{type}</Text>
          <Text style={styles.cardText}>{name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

 export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
