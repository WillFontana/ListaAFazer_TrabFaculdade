import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import capitalize from "../../utils/capitalize";
import { styles } from "./styles";

const FilterField = ({ label, options, defaultOption, handleChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Picker
        style={[{ height: 30, width: "100%" }, styles.field]}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
      >
        {options.map((item, index) => (
          <Picker.Item
            key={`option-${index}`}
            label={`${item.capitalize()}`}
            value={item}
          />
        ))}
      </Picker>
    </View>
  );
};

export default FilterField;
