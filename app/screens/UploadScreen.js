import {Modal, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';

import AppText from "../components/AppText";
import colors from "../config/colors";

const UploadScreen = ({progress = 0, visible = false}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default UploadScreen;
