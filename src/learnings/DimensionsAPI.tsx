import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

export const DimensionsAPI = () => {
  // to address the drawback of Dimensions API,
  //which is the lack of dimensions update on rotation, we use useState & useEffect

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log({ windowWidth, windowHeight });

  return (
    <View
      style={{
        ...styles.box,
        width: windowWidth > 500 ? '70%' : '90%',
        height: windowHeight > 600 ? '60%' : '70%',
      }}
    >
      <Text style={{ ...styles.text, fontSize: windowWidth > 500 ? 50 : 24 }}>
        Welcome
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: 'white' },
});
