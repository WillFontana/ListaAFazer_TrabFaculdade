import React from "react";
import { View, Text } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View>
      <Text>A fazer: {item.descricao}</Text>
      <Text>Data de criação: {item.data}</Text>
      <Text>Status da tarefa: {item.status}</Text>
    </View>
  );
};

export default ListItem;
