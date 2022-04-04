import {View} from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";


const App = () => {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red"/>
    </Screen>
  );
};

export default App;
