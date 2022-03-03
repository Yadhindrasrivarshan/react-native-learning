import React from "react";
import { Button, View } from "react-native";

const CustomButton = ({ title, color, onPressFunction }) => {
  return (
    <View>
      <Button title={title} onPress={onPressFunction} color={color} />
    </View>
  );
};

export default CustomButton;
