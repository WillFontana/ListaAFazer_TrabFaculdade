import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

const Button = ({ icon, complementStyle = {}, text, ...rest }) => {
  return (
    <RectButton style={[styles.button, complementStyle]} {...rest}>
      {icon}
      {text && <Text>{text}</Text>}
    </RectButton>
  );
};

export default Button;
