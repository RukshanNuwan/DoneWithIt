import {createStackNavigator} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import listingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen name="Listings" component={ListingsScreen} options={{headerTitleAlign: "center"}}/>
    <Stack.Screen name="ListingDetails" component={listingDetailsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default FeedNavigator;
