import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')} blurRadius={7}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
});

export default WelcomeScreen;
