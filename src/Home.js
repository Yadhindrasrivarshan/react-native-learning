import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "./components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, getCitites } from "../src/redux/action";
const Home = ({ navigation }) => {
  const { name, age, cities } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  useEffect(() => {
    getData();
    dispatch(getCitites());
  }, []);
  const getData = () => {
    try {
      //   AsyncStorage.getItem("UserDetails").then((value) => {
      //     if (value != null) {
      //       let user = JSON.parse(value);
      //       setName(user.name);
      //       setAge(user.age);
      //     }
      //   });
    } catch (error) {
      console.log("Error in retrieving UserName");
    }
  };
  const updateData = async () => {
    if (name.length > 0) {
      try {
        // await AsyncStorage.setItem("UserName", name);
        Alert.alert("Success", "Your name is been updated");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Warning", "Please enter a name");
    }
  };
  const removeData = async () => {
    try {
      //   await AsyncStorage.removeItem("UserName");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.body}>
      <Text>Welcome {name} !</Text>
      <Text>Your {age} !</Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Map", {
                city: item.countryName,
              });
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{item.countryName}</Text>
              <Text style={styles.subtitle}>{item.countryCode}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name"
      />
      <CustomButton
        title="Update"
        color="#1eb900"
        onPressFunction={updateData}
      />
      <CustomButton title="Delete" color="red" onPressFunction={removeData} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 20,

    fontStyle: "italic",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
    height: 50,
  },
  item: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 30,
    margin: 10,
    color: "#999999",
  },
});

export default Home;
