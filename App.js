import {View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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
      <MaterialCommunityIcons name='email' size={200} color='dodgerblue'/>
    </View>
  );
};

export default App;
