import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector, useDispatch } from "react-redux";
import { setAge, setName } from "../redux/action";

const Login = ({ navigation }) => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  const { name, age } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      //   AsyncStorage.getItem("UserDetails").then((value) => {
      //     if (value != null) {
      //       navigation.navigate("home");
      //     }
      //   });
    } catch (error) {
      console.log("Error in retrieving UserName");
    }
  };
  const setData = async () => {
    console.log("Hey");
    if (name.length > 0 && age.length > 0) {
      //   const user = { name, age };
      try {
        dispatch(setName(name));
        dispatch(setAge(age));

        // await AsyncStorage.setItem("UserDetails", JSON.stringify(user));
        navigation.navigate("home");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Warning", "Please enter a name");
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      <Text style={styles.text}>SQLite Storage</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => dispatch(setName(value))}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => dispatch(setAge(value))}
        placeholder="Enter your age"
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
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
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    height: 50,
  },
});
export default Login;
