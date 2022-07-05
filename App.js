import * as React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, LightTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapScreen } from './src/screens/MapScreen';
import { HomeScreen } from './src/screens/HomeScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#000000',
    background: 'rgb(242, 242, 242)',
    card: '#ffbffb',
    text: '#000000',
    border: 'rgb(199, 199, 204)',
    notification: '#ffbffb',
    chub: '#ffbffb',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
