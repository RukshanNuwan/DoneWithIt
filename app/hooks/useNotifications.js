import {useEffect} from "react";

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      await expoPushTokensApi.register(token);
    } catch (err) {
      console.log('Error getting a push token', err);
    }
  };
};

export default useNotifications;
