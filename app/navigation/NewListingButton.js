import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../config/colors";

const NewListingButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 10,
  }
});

export default NewListingButton;
