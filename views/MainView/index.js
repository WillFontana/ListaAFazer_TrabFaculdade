import React, { useState } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import TodoList from "../../components/TodoList";
import ListHandler from "../../components/ListHandler";

const MainView = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      descricao: "Dar nota máxima pra gente rsrs",
      data: moment().format("lll"),
      status: "aberto",
    },
  ]);
  const [filter, setFilter] = useState("todos");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo a sua lista de a fazeres!</Text>
      <ListHandler
        addItemList={setTodoList}
        todoList={todoList}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        filter={filter}
        todoList={todoList}
        handleChangeItemStatus={setTodoList}
      />
    </View>
  );
};

export default MainView;
