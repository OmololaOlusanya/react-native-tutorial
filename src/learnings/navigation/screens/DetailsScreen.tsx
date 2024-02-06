import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { StackParamList } from '../StackNavigation';

type Props = NativeStackScreenProps<StackParamList, 'About'>;
export function DetailsScreen({ navigation, route }: Props) {
  const { name } = route.params;
  // const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen: {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Update name"
        onPress={() => navigation.setParams({ name: 'Updated' })}
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate('Home', { result: 'Data from navigation' })
        }
      />
    </View>
  );
}
