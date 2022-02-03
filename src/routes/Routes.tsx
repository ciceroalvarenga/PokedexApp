import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens/Home';
import {AboutPokemons} from '@screens/About';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AboutPokemons" component={AboutPokemons} />
    </Stack.Navigator>
  );
}
