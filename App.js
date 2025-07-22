import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import SheetMusic from './components/SheetMusic';
import FilterScreen from './components/FilterScreen';
import MusicalHangman from './components/HangmanWordGames/MusicalHangman';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sheet Music for Kids">

        <Stack.Screen
          name="Sheet Music for Kids"
          component={FilterScreen}
          options={{
            title: 'Sheet Music for Kids',
            headerBackTitle: 'TEST TEST TEST',
            headerShown: true,
            headerTintColor: 'gray',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        {/* //Search for songs after category is selected */}
        <Stack.Screen
          name="Search"
          component={Home}
          options={{
            title: '',
            headerTintColor: 'gray',
            headerShown: true,
            headerBackTitle: 'Choose Filter',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />

        <Stack.Screen
          name="SheetMusic"
          component={SheetMusic}
          options={{
            headerShown: true, // ✅ just in case
            title: 'Sheet Music for Kids',
            headerBackTitle: 'Search Music',
            headerTintColor: 'gray',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="MusicalHangman"
          component={MusicalHangman}
          options={{
            headerShown: true,
            headerBackTitle: 'Sheet Music For Kids',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
            title: 'Musical Hangman',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
