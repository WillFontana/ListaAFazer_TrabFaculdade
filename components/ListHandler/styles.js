import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
  },
  fieldContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  field: {
    height: 30,
    borderColor: "#CECFCE",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    minWidth: 342,
    borderRadius: 6,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#88D6F399",
    marginLeft: 20,
  },
  buttonText: {
    marginTop: 10,
    width: 80,
    paddingTop: 5,
    paddingBottom: 8,
    backgroundColor: "#F6D9AA99",
    borderRadius: 6,
    marginBottom: 20,
  },
});
