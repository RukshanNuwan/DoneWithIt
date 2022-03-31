import {Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello react native</Text>
      <TouchableOpacity onPress={() => console.log('image tapped')}>
        <Image
          source={
            {
              width: 200,
              height: 300,
              uri: 'https://picsum.photos/200/300'
            }
          }
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
