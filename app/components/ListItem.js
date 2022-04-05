import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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

            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
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
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  }
});

export default ListItem;
