import {useEffect, useState} from "react";
import {Button, Image, Text, TextInput, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";


const App = () => {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (err) {
      console.log('Error reading an image', err);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}/>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>
      <ImageInput imageUri={imageUri}/>
    </Screen>
  );
};

export default App;
