import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Next from './components/Next';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.stack}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Mowgli Sheet Music', headerTintColor: 'gray', headerStyle: {
            backgroundColor: 'black'
          }
        }} />
        <Stack.Screen name="Next" component={Next} options={{
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


const styles = StyleSheet.create({
  stack: {
    backgroundColor: 'blue',
  },
});
