import React, { useEffect } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetData, setTaskID, setTasks } from "../redux/action";
const ToDo = ({ navigation }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.userReducer);
  useEffect(() => {
    getTasks();
  });
  const getTasks = () => {
    AsyncStorage.getItem("Tasks")
      .then((tasks) => {
        const parsedTasks = JSON.parse(tasks);

        if (parsedTasks && typeof parsedTasks === "object") {
          dispatch(setTasks(parsedTasks));
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.ID !== id);
    AsyncStorage.setItem("Tasks", JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
        Alert.alert("Success!", "Task had been deleted successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.body}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate("Task", {
                mode: "edit",
              });
            }}
          >
            <View style={styles.item_row}>
              <View
                style={[
                  {
                    backgroundColor:
                      item.Color === "red"
                        ? "#f28b82"
                        : item.Color === "blue"
                        ? "#aecbfa"
                        : item.Color === "green"
                        ? "#ccff90"
                        : "#ffffff",
                  },
                  styles.color,
                ]}
              />
              <View style={styles.item_body}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.Title}
                </Text>
                <Text numberOfLines={1} style={styles.desc}>
                  {item.Desc}
                </Text>
              </View>

              <TouchableOpacity onPress={() => deleteTask(item.ID)}>
                <Image
                  style={styles.deleteImg}
                  source={require("../../assets/delete.png")}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Button
        title="Clear local storage"
        onPress={() => AsyncStorage.clear()}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(resetData());
          navigation.navigate("Task", {
            mode: "create",
          });
        }}
      >
        <Image
          style={styles.deleteImg}
          source={require("../../assets/plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { flex: 1 },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 10,
  },
  img: {
    height: 30,
    width: 30,
  },
  deleteImg: {
    height: 30,
    width: 30,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 5,
  },
  item_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontSize: 30,
    margin: 5,
  },
  desc: {
    color: "#999999",
    fontSize: 20,
    margin: 5,
  },
  item_body: {
    flex: 1,
  },
  color: {
    width: 20,
    height: 100,
  },
});
export default ToDo;
