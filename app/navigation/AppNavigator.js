import {useEffect} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from '../navigation/routes';
import expoPushTokensApi from "../api/expoPushTokens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } catch (err) {
      console.log('Error getting a push token', err);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>
        }}
      />

      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>
          ),
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size}/>,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
