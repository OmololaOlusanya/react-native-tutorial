import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    marginVertical: 45,
    marginHorizontal: 20,
    backgroundColor: 'lightblue',
    borderColor: 'purple',
    borderRadius: 10,
    borderWidth: 1,
  },
  boxShadow: {
    shadowColor: 'blue',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 20,
  },
  darkMode: {
    backgroundColor: 'black',
    color: 'white',
  },
  darkModeText: {
    color: 'white',
  },
  boldText: { fontWeight: 'bold' },
});
