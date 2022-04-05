import {useState} from "react";
import {FlatList, StyleSheet} from 'react-native';

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: 'Rukshan Nuwan',
    description: 'Hey! Is this item still available?',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'Rukshan Nuwan',
    description: 'I\'m interested in this item. When will you be able to post it?',
    image: require('../assets/mosh.jpg')
  }
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((msg) => msg.id !== message.id));

    // Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message selector', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 't2',
              description: 'd2',
              image: require('../assets/mosh.jpg')
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
