import {View} from 'react-native';
import AppText from "./app/components/AppText";

const App = () => {
  return (
    <View
      style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
    >
      <AppText>Sample Text</AppText>
    </View>
  );
};

export default App;
