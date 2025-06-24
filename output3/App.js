import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
const logoImg = require("./assets/logo.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>COLLEGE OF COMPUTING AND INFORMATION TECHNOLOGY</Text>
      <Image source={logoImg} style={{width: 300, height: 300}}></Image>
      <Text style={{marginTop: 50}}>Developed by</Text>
      <Text style={{fontSize: 20}}>Nilmay Pepito</Text>
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
