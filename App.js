import {useState} from "react";
import {Text, TextInput, View} from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";


const App = () => {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        placeholder="First Name"
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
        onChangeText={text => setFirstName(text)}
      />
    </Screen>
  );
};

export default App;
