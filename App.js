import {Button, Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';

export default function App() {
  const dimensions = useDimensions();
  const orientation = useDeviceOrientation();

  console.log('dimensions -> ', dimensions);
  console.log('orientation -> ', orientation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: orientation.landscape ? '100%' : '30%'
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
