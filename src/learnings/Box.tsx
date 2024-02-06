import { View, Text } from 'react-native';
import { styles } from '../../StyleSheet';

export const Box = () => {
  return (
    <>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance <Text style={styles.boldText}>Bold text</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.boxShadow]}>
        <Text>Box</Text>
      </View>
    </>
  );
};
