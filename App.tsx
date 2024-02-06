import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import StackNavigation from './src/learnings/navigation/StackNavigation';
import DrawerNavigation from './src/learnings/navigation/DrawerNavigation';
import TabNavigation from './src/learnings/navigation/TabNavigation';

export default function App() {
  return (
    <TabNavigation />
    // <SafeAreaView style={styles.container}>
    //   <Networking />
    // </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
  },
});
