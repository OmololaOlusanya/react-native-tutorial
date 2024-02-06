import { View, Text, StyleSheet } from 'react-native';

export const Layout = () => {
  return (
    <View style={styles.container}>
      <Box
        children={'Box 1'}
        style={{ backgroundColor: 'blue', alignSelf: 'center' }}
      />
      <Box children={'Box 2'} style={{ backgroundColor: 'orange' }} />
      <Box children={'Box 3'} style={{ backgroundColor: 'red' }} />
      {/* <Box children={'Box 4'} style={{ backgroundColor: 'green' }} />
      <Box children={'Box 5'} style={{ backgroundColor: 'purple' }} />
      <Box children={'Box 6'} style={{ backgroundColor: 'violet' }} />
      <Box children={'Box 7'} style={{ backgroundColor: 'grey' }} /> */}
    </View>
  );
};

const Box = ({ children, style }) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: 'brown',
    borderWidth: 2,
    // flex: 1,
  },
  box: { backgroundColor: 'white', padding: 20 },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
