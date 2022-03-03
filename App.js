import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

enableScreens();

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Home from "./src/Home";
import Settings from "./src/Settings";
import Login from "./src/components/Login";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          stackAnimation: "slide_from_right",
        }}
      >
        <Stack.Screen name="home" component={Home} />

        <Stack.Screen
          options={{ headerLargerTitle: true }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
