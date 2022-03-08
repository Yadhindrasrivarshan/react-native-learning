import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

enableScreens();

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Home from "./src/Home";
import Settings from "./src/Settings";
import Login from "./src/components/Login";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import Map from "./src/components/Map";
import Splash from "./src/components/Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDo from "./src/components/ToDo";
import Done from "./src/components/Done";
import Task from "./src/components/Task";
const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"To-Do"} component={ToDo} />
      <Tab.Screen name={"Done"} component={Done} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            stackAnimation: "slide_from_right",
          }}
        >
          <RootStack.Screen name="home" component={Home} />

          <RootStack.Screen
            options={{ headerLargerTitle: true }}
            name="Splash"
            component={Splash}
          />
          <RootStack.Screen
            options={{ headerLargerTitle: true }}
            name="MyTasks"
            component={HomeTabs}
          />
          <RootStack.Screen
            options={{ headerLargerTitle: true }}
            name="Task"
            component={Task}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
