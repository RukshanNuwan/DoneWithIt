import {useEffect, useState} from "react";
import {AsyncStorage, Button, Image, Text, TextInput, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import jwtDecode from "jwt-decode";
import {AppLoading} from 'expo'

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false)

  const restoreToken = async () => {
    const token = await authStorage.getToken();

    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)}/>
    )
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>

      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
