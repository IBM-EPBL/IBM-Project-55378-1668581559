import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import One from "./One";
import Check from "./check"
import Error from "./ErrorPage"

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Check" component={Check} />
        <Stack.Screen name="Error" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;