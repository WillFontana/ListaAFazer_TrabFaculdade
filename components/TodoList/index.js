import React from "react";
import { View } from "react-native";
import ListItem from "./ListItem";

const TodoList = ({ todoList }) => {
  return (
    <View>
      {todoList.map((todo) => (
        <ListItem item={todo} key={todo.id} />
      ))}
    </View>
  );
};

export default TodoList;
