import {createStackNavigator} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import listingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Listings" component={ListingsScreen}/>
    <Stack.Screen name="ListingDetails" component={listingDetailsScreen}/>
  </Stack.Navigator>
);

export default FeedNavigator;
