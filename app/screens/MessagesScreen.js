import {useState} from "react";
import {FlatList, StyleSheet} from 'react-native';

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/mosh.jpg')
  }
];

const MessagesScreen = () => {
  const {messages, setMessages} = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter((msg) => msg.id !== message.id);
    setMessages(newMessages);

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
            renderRightActions={() => <ListItemDeleteAction onPress={() => console.log('delete icon', item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
