import * as React from 'react';
import { ImageBackground, Button, View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Next from './components/Next'

// import SearchBar from './components/SearchPage.js'



const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}
// static navigationOptions = ({ navigation }) => {
//   return {
//      title: 'Screen Title',
//      headerTintColor: 'royalblue',
//      headerStyle: {
//         backgroundColor: '#fff'
//      }
//   }
// }

const Tab = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer  >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          title: 'Search Topics', headerStyle: {
            backgroundColor: '#675B5B'
          }
        }} />
        <Tab.Screen name="Hymns" component={Next} options={{
          title: '', headerStyle: {
            backgroundColor: 'black'
          }
        }} />
        {/* <Tab.Screen name="Devotionals" component={DevotionalCard} />
        <Tab.Screen name="Saved" component={Saved} /> */}
        {/* <Tab.Screen name="SearchBar" component={SearchBar}/> */}
      </Tab.Navigator>
    </NavigationContainer>


  );
}

export default App;