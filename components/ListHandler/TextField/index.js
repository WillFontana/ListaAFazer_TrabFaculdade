import React from "react";
import { View, TextInput, Text } from "react-native";

const TextField = ({ label, descr, ...rest }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...rest} value={descr} />
    </View>
  );
};

export default TextField;
