import React from "react";
import { Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Button = ({ icon, text, ...rest }) => {
  return (
    <RectButton {...rest}>
      {icon}
      {text && <Text>{text}</Text>}
    </RectButton>
  );
};

export default Button;
