import {View} from 'react-native';

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
      <View
        style={
          {
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 100,
            // for IOS
            // shadowColor: 'grey',
            // shadowOffset: {width: 0, height: 10},
            // shadowOpacity: 1,
            // shadowRadius: 10,
            // for Android
            elevation: 20,
          }
        }
      >
      </View>
    </View>
  );
};

export default App;
