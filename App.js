import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('text pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress}>
        Hello react native - a really really long text. now I wanna make this even longer and see what happens!
      </Text>
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
