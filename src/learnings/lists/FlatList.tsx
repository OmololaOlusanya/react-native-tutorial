import React from 'react';
import pokermonList from '../../../data.json';
import { FlatList, View, Text } from 'react-native';
import { styles } from './List';

export const FlatListExample = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={pokermonList}
      renderItem={({ item: { id, name, type } }) => {
        return (
          <View key={id} style={styles.card}>
            <Text style={styles.cardText}>{type}</Text>
            <Text style={styles.cardText}>{name}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      ListEmptyComponent={() => <Text>No Items found</Text>}
      ListHeaderComponent={() => (
        <Text style={[styles.headerText, { textAlign: 'center' }]}>
          Pokemon List
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={styles.headerText}>End of List</Text>
      )}
    />
  );
};
