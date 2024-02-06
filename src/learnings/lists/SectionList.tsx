import React from 'react';
import jsonData from '../../../grouped-data.json';
import { SectionList, View, Text } from 'react-native';
import { styles } from './List';

export const SectionListExample = () => {
  return (
    <SectionList
      style={{ paddingHorizontal: 16 }}
      sections={jsonData}
      renderItem={({ item }) => {
        return (
          <View key={item} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )}
    />
  );
};
