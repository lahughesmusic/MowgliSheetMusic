import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SheetMusic from './components/SheetMusic';
import FilterScreen from './components/FilterScreen';
import MusicalHangman from './components/HangmanWordGames/MusicalHangman';
import SongCategoryScreen from './components/SongCategoryScreen';
import FlashcardCategoryScreen from './components/FlashcardsComponents/FlashcardCategoryScreen';
import NoteRecognitionSubcategoryScreen from './components/FlashcardsComponents/NoteRecognitionSubcategoryScreen';
import FlashcardViewer from './components/FlashcardsComponents/FlashcardViewer';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Musical Hangman & More!">

        <Stack.Screen
          name="Musical Hangman & More!"
          component={FilterScreen}
          options={{
            title: 'Musical Hangman & More!',
            headerBackTitle: 'TEST TEST TEST',
            headerShown: true,
            headerTintColor: 'gray',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />

        {/* Show song categories */}
        <Stack.Screen
          name="SongCategoryScreen"
          component={SongCategoryScreen}
          options={{
            title: 'Choose Song Type',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
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
            title: 'Musical Hangman & More!',
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
            headerBackTitle: 'Musical Hangman & More!',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
            title: 'Musical Hangman',
          }}
        />
        <Stack.Screen
          name="FlashcardCategories"
          component={FlashcardCategoryScreen}
          options={{
            title: 'Flashcard Categories',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
          }}
        />

        <Stack.Screen
          name="NoteRecognitionSubcategories"
          component={NoteRecognitionSubcategoryScreen}
          options={{
            title: 'Note Recognition',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
          }}
        />

        <Stack.Screen
          name="FlashcardViewer"
          component={FlashcardViewer}
          options={{
            title: 'Flashcards',
            headerTintColor: 'gray',
            headerStyle: { backgroundColor: 'black' },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
