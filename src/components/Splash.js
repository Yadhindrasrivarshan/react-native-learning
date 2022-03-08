import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MyTasks");
    }, 2000);
  });
  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      <Text style={styles.text}>To-Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 200,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: "#FFFF",
    marginBottom: 30,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
});
export default Splash;
