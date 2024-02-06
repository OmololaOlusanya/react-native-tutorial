import { Text, Image, ImageBackground } from 'react-native';

const logoImg = require('../../assets/adaptive-icon.png');

export default function LearnAboutImage() {
  return (
    <ImageBackground source={logoImg} style={{ flex: 1 }}>
      <Text>Hi hello</Text>
      <Image source={logoImg} style={{ height: 300, width: 300 }} />
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ height: 300, width: 300 }}
      />
    </ImageBackground>
  );
}
