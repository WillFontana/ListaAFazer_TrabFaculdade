import React from "react";
import { View } from "react-native";
import ListItem from "./ListItem";

const TodoList = ({ todoList, handleChangeItemStatus }) => {
  const handleChangeStatus = (id, status) => {
    const item = todoList.find((listItem) => listItem.id === id);
    item.status = status;

    let updatedTodoList = todoList.filter((el) => el.id !== item.id);

    updatedTodoList.push(item);

    updatedTodoList.sort((a, b) => (a.id > b.id ? 1 : -1));

    handleChangeItemStatus(updatedTodoList);
  };

  return (
    <View>
      {todoList.map((todo) => (
        <ListItem
          item={todo}
          key={todo.id}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </View>
  );
};

export default TodoList;
