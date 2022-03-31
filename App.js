import {Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyles]}>
      <Button title={'Click me'} onPress={() => console.log('clicked')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const containerStyles = {
  backgroundColor: 'orange'
}
