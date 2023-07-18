import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinListDetails from "./src/components/CoinListDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PriceList" component={Home} />
        <Stack.Screen
          name="CoinListDetails"
          component={CoinListDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
