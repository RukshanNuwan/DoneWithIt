import {Text, View} from 'react-native';

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
      <Text
        style={
          {
            fontSize: 30,
            // fontFamily: 'Roboto', // ==> default
            fontStyle: 'italic',
            fontWeight: '600',
            color: 'tomato',
            textTransform: 'capitalize',
            textAlign: 'center',
            lineHeight: 30,
          }
        }
      >
        sample text. this is a sample react native app. here's some more
      </Text>
    </View>
  );
};

export default App;
