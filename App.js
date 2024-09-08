import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import SheetMusic from './components/SheetMusic';
import Purchases from 'react-native-purchases'
const Stack = createNativeStackNavigator();


async function fetchOfferings() {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current !== null) {
      // Use offerings to display in your UI
      console.log("Offerings: ", offerings);
    }
  } catch (error) {
    console.error("Error fetching offerings: ", error);
  }
}

async function subscribeToPlan(productId) {
  try {
    const purchaseMade = await Purchases.purchasePackage(productId);
    // Handle successful purchase
  } catch (error) {
    if (!error.userCancelled) {
      console.error("Purchase failed: ", error);
    }
  }
}

export default function App() {
  // Place this inside your main function or useEffect in App.js
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true); // Enable to see detailed logs
    Purchases.setup("appl_NaQLRuUAdcQxhyTtCuEmGfhzIib");
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Mowgli Sheet Music', headerTintColor: 'gray', headerStyle: {
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
