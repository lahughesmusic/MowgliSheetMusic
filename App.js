import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import SheetMusic from './components/SheetMusic';
import FilterScreen from './components/FilterScreen';
const Stack = createNativeStackNavigator();




export default function App() {


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FilterScreen} />
        <Stack.Screen name="Search" component={Home} options={{
          title: 'Children\'s Sheet Music', headerTintColor: 'gray', headerStyle: {
            backgroundColor: 'black'
          }
        }} />
        <Stack.Screen name="Next" component={SheetMusic} options={{
          headerTintColor: 'gray',
          title: '',
          headerStyle: {

            backgroundColor: 'black'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
