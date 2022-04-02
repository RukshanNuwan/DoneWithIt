import {View} from 'react-native';

import AppButton from "./app/components/AppButton";

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
      <AppButton title='Login' onPress={() => console.log('tapped')}/>
    </View>
  );
};

export default App;
