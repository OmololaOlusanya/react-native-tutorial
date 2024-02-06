import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, Text } from 'react-native';
import CourseListScreen from './screens/CourseListScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/Settings';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AboutStack } from './StackNavigation';

export type TabParamList = {
  Profile: undefined;
  CourseList: undefined;
  Settings: undefined;
  AboutStack: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CourseList"
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen
          name="CourseList"
          component={CourseListScreen}
          options={{
            title: 'Course List',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'person'} size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Course List',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'settings'} size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="AboutStack"
          component={AboutStack}
          options={{
            title: 'About Stack',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
