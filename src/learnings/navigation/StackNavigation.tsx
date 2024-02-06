import { Text, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';

export type StackParamList = {
  Home: { result: string } | undefined;
  About: { name: string } | undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
export const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#6a51ae' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#e8e4f3' },
        headerRight: () => (
          <Pressable onPress={() => alert('Menu button pressed!')}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome Home',
        }}
      />
      <Stack.Screen
        name="About"
        component={DetailsScreen}
        initialParams={{
          name: 'Guest',
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
