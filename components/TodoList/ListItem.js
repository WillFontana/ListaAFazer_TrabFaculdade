import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({ item, handleChangeStatus }) => {
  return (
    <View>
      <View></View>
      <Text>A fazer: {item.descricao}</Text>
      <Text>Data de criação: {item.data}</Text>
      <Text>Status da tarefa: {item.status}</Text>
      <View>
        <Button
          icon={<AntDesign name="check" size={24} color="black" />}
          onPress={() => handleChangeStatus(item.id, "concluido")}
        />
        <Button
          icon={<AntDesign name="close" size={24} color="black" />}
          onPress={() => handleChangeStatus(item.id, "cancelado")}
        />
      </View>
    </View>
  );
};

export default ListItem;
