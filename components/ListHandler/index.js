import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import moment from "moment";
import Button from "../Button";
import TextField from "../TextField";
import { Ionicons } from "@expo/vector-icons";
import FilterField from "../FilterField";

const filters = ["todos", "concluido", "cancelado", "aberto"];

const ListHandler = ({ todoList, addItemList, filter, setFilter }) => {
  const [newTodoDescr, setNewTodoDescr] = useState("");

  const alertEmptyField = () => {
    Alert.alert("Tarefa inválida!", "O campo está vazio!", [
      { text: "cancelar", style: "cancel" },
    ]);
  };

  const handleAddItemTodo = () => {
    if (newTodoDescr.trim() !== "") {
      const newTodo = {
        id: todoList.length + 1,
        descricao: newTodoDescr,
        data: moment().format("lll"),
        status: "aberto",
      };

      addItemList([...todoList, newTodo]);
      setNewTodoDescr("");
    } else {
      alertEmptyField();
    }
  };

  return (
    <View>
      <View>
        <TextField
          label="Novo afazer"
          onChangeText={setNewTodoDescr}
          descr={newTodoDescr}
        />
        <Button
          onPress={handleAddItemTodo}
          icon={<Ionicons name="add" size={24} color="black" />}
        />
        <Button onPress={() => setNewTodoDescr("")} text="Limpar" />
      </View>
      <View>
        <FilterField
          label="Filtrar por status"
          options={filters}
          defaultOption={filter}
          handleChange={setFilter}
        />
      </View>
    </View>
  );
};

export default ListHandler;
