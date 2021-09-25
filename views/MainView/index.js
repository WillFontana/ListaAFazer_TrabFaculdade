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
      status: "finalizado",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo a sua lista de afazeres!</Text>
      <ListHandler addItemList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} handleChangeItemStatus={setTodoList} />
    </View>
  );
};

export default MainView;
