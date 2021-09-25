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
      descricao: "Fazer trab da Liliane",
      data: moment().format("lll"),
      status: "aberto",
    },
    {
      id: 2,
      descricao: "Fazer trab da Liliane",
      data: moment().format("lll"),
      status: "cancelado",
    },
    {
      id: 3,
      descricao: "Fazer trab da Liliane",
      data: moment().format("lll"),
      status: "concluido",
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
