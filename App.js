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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            stackAnimation: "slide_from_right",
          }}
        >
          <Stack.Screen name="home" component={Home} />

          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            options={{ headerLargerTitle: true }}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
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
