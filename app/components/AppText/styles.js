import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir'
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto'
      }
    }),
    color: '#000',
  }
});

export default styles;
