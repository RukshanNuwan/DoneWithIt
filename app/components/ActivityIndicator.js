import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({visible = false}) => {
  if (!visible) return null;

  return (
    <View srtle={styles.overlay}>
      <LottieView autoPlay loop source={require('../assets/animations/loader.json')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.8,
    zIndex: 1,
  },
});

export default ActivityIndicator;
