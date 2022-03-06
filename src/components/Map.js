import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Map = ({ route }) => {
  const { city } = route.params;
  return (
    <View style={styles.body}>
      <Text>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
});
export default Map;
