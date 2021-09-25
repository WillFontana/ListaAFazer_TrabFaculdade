import React from "react";
import { View } from "react-native";
import ListItem from "./ListItem";

const TodoList = ({ todoList, handleChangeItemStatus, filter }) => {
  const handleChangeStatus = (id, status) => {
    const item = todoList.find((listItem) => listItem.id === id);
    item.status = status;

    let updatedTodoList = todoList.filter((el) => el.id !== item.id);

    updatedTodoList.push(item);

    updatedTodoList.sort((a, b) => (a.id > b.id ? 1 : -1));

    handleChangeItemStatus(updatedTodoList);
  };

  const renderFilteredItems = () => {
    if (filter !== "todos") {
      return todoList.map(
        (todo) =>
          todo.status === filter && (
            <ListItem
              item={todo}
              key={todo.id}
              handleChangeStatus={handleChangeStatus}
            />
          )
      );
    } else {
      return todoList.map((todo) => (
        <ListItem
          item={todo}
          key={todo.id}
          handleChangeStatus={handleChangeStatus}
        />
      ));
    }
  };

  return <View>{renderFilteredItems()}</View>;
};

export default TodoList;
