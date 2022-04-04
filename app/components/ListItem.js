import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({image, title, subTitle, IconComponent, onPress, renderRightActions}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image}/>}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  }
});

export default ListItem;