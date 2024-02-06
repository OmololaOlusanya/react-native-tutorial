import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation, route }: { navigation; route }) {
  const result = route.params?.result;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen: {result}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', { name: 'Omolola' })}
      />
    </View>
  );
}
