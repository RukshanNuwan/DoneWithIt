import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Click me'}
        onPress={() => Alert.alert('My title', 'My message', [
          {text: 'Yes', onPress: () => console.log('pressed yes')},
          {text: 'No', onPress: () => console.log('pressed no')}
        ])}
        color={'orange'}
      />

      <Button
        title={'Prompt button'}
        // this api works with only ios
        onPress={() => Alert.prompt('My title', 'My message', (text) => console.log(text))}
      />
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
