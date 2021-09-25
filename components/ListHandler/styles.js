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
    flex: 2,
    height: 24,
    minWidth: 380,
    borderColor: "#CECFCE",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
  },
  button: {
    width: 26,
    height: 26,
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
