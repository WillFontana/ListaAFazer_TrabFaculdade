import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import capitalize from "../../utils/capitalize";

const FilterField = ({ label, options, defaultOption, handleChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Picker
        selectedValue={defaultOption}
        style={{ height: 30, width: "100%" }}
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
