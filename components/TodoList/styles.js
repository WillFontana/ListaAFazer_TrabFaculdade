import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 6,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  aberto: {
    borderColor: "#CECFCE",
    backgroundColor: "#CECFCE44",
  },
  concluido: {
    borderColor: "#BDE9BD",
    backgroundColor: "#BDE9BD22",
  },
  cancelado: {
    borderColor: "#E9BDBD",
    backgroundColor: "#E9BDBD22",
  },
  text: {
    fontSize: 16,
    color: "#242424",
  },
});
