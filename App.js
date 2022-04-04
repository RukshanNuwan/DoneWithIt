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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        placeholder="Category"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email"/>
    </Screen>
  );
};

export default App;
