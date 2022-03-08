import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./CustomButton";
import { setTaskID, setTasks } from "../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
const Task = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();

  const { tasks, taskID } = useSelector((state) => state.userReducer);
  useEffect(() => {
    getTask();
  }, [taskID]);
  const addTask = () => {
    if (title.length === 0) {
      Alert.alert("Warning!", "Please write your task title.");
    } else {
      try {
        const editMode = route.params.mode === "edit";

        var Task = {
          ID: editMode ? taskID : uuid.v4(),
          Title: title,
          Desc: desc,
          Color: color,
        };
        let index = -1;

        if (editMode) {
          index = tasks.findIndex((task) => task.ID == taskID);
        }
        let newTasks = [];
        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = Task;
        } else {
          newTasks = [...tasks, Task];
        }
        AsyncStorage.setItem("Tasks", JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            Alert.alert(
              "Success!",
              `Successfully ${index > -1 ? "Updated" : "added"} tasks`
            );
            navigation.goBack();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTask = () => {
    const Task = tasks.find((t) => t.ID === taskID);
    if (Task) {
      setTitle(Task.Title);
      setDesc(Task.Desc);
      setColor(Task.Color);
    }
  };
  return (
    <View style={styles.body}>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(value) => setTitle(value)}
        placeholder="Title"
      />
      <TextInput
        value={desc}
        style={styles.input}
        onChangeText={(value) => setDesc(value)}
        placeholder="Description"
        multiline
      />
      <View style={styles.color_bar}>
        <TouchableOpacity
          onPress={() => setColor("white")}
          style={styles.color_white}
        >
          {color === "white" && (
            <Image
              style={styles.img}
              source={require("../../assets/tick.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setColor("red")}
          style={styles.color_red}
        >
          {color === "red" && (
            <Image
              style={styles.img}
              source={require("../../assets/tick.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setColor("blue")}
          style={styles.color_blue}
        >
          {color === "blue" && (
            <Image
              style={styles.img}
              source={require("../../assets/tick.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setColor("green")}
          style={styles.color_green}
        >
          {color === "green" && (
            <Image
              style={styles.img}
              source={require("../../assets/tick.png")}
            />
          )}
        </TouchableOpacity>
      </View>

      <CustomButton
        onPressFunction={addTask}
        title="Save Task"
        color="#1eb900"
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,

    alignItems: "center",
    padding: 10,
  },
  checkbox: {
    margin: 10,
    flexDirection: "row",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "left",
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: "#000000",
  },
  color_bar: {
    flexDirection: "row",
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#555555",
    marginVertical: 10,
  },
  color_white: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  color_red: {
    flex: 1,
    backgroundColor: "#f28b82",
    justifyContent: "center",
    alignItems: "center",
  },
  color_blue: {
    flex: 1,
    backgroundColor: "#aecbfa",
    justifyContent: "center",
    alignItems: "center",
  },
  color_green: {
    flex: 1,
    backgroundColor: "#ccff90",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  img: {
    height: 25,
    width: 25,
  },
});

export default Task;
