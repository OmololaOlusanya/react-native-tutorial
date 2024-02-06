import { Text, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashBoardScreen';
import SettingsScreen from './screens/Settings';

export type DrawerParamList = {
  Dashboard: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: { backgroundColor: '#6a51ae' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerLabel: 'Dashboard label',
          drawerActiveTintColor: '#333',
          drawerActiveBackgroundColor: 'lightblue',
          drawerContentStyle: {
            backgroundColor: '#c6cbef',
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'My dashboard',
            headerRight: () => (
              <Pressable onPress={() => alert('Menu Pressed')}>
                <Text style={{ color: 'white' }}>Menu</Text>
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
