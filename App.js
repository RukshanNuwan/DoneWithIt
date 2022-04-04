import {View} from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";


const App = () => {
  return (
    <Screen>
      <ListItem title='title' subTitle='subtitle' ImageComponent={<Icon name='email'/>}/>
    </Screen>
  );
};

export default App;
