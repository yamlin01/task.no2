import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
const logoImg = require("./assets/Mark_Zuckerberg.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={{width:300, height: 300}}></Image>
      <Text>Mark Zuckerberg</Text>
      <Text>CEO Meta</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
