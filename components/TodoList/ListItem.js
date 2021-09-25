import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import capitalize from "../../utils/capitalize";

const ListItem = ({ item, handleChangeStatus }) => {
  return (
    <View style={[styles.container, styles[item.status]]}>
      <View>
        <Text style={[styles.text, { marginBottom: 2 }]}>
          A fazer: {item.descricao}
        </Text>
        <Text style={[styles.text, { marginBottom: 2 }]}>
          Data de criação: {item.data}
        </Text>
        <Text style={styles.text}>
          Status da tarefa: {item.status.capitalize()}
        </Text>
      </View>
      {item.status === "aberto" && (
        <View>
          <Button
            complementStyle={{ marginBottom: 5, backgroundColor: "#BDE9BD66" }}
            icon={<AntDesign name="check" size={16} color="black" />}
            onPress={() => handleChangeStatus(item.id, "concluido")}
          />
          <Button
            complementStyle={{ backgroundColor: "#E9BDBD66" }}
            icon={<AntDesign name="close" size={16} color="black" />}
            onPress={() => handleChangeStatus(item.id, "cancelado")}
          />
        </View>
      )}
    </View>
  );
};

export default ListItem;
