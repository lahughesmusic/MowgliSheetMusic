import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/image.jpg';

const homeCategories = ['Songs', 'Musical Hangman', 'Flashcards'];

const songCategories = [
    "One Hand", "One Hand, 8th Notes", "C Position", "C Position, 8th Notes",
    "Middle C Position", "Middle C Position, 8th Notes", "Show All"
];

export default function FilterScreen({ navigation }) {
    const [showSongCategories, setShowSongCategories] = useState(false);

    const handlePress = (cat) => {
        if (cat === 'Musical Hangman') {
            navigation.navigate('MusicalHangman');
        } else if (cat === 'Flashcards') {
            alert('Flashcards coming soon!');
        } else if (!showSongCategories && cat === 'Songs') {
            setShowSongCategories(true);
        } else {
            navigation.navigate('Search', { category: cat });
        }
    };
    const displayedCategories = showSongCategories ? songCategories : homeCategories;

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {displayedCategories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={styles.button}
                        onPress={() => handlePress(cat)}
                    >
                        <Text style={styles.buttonText}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: 'rgba(128, 128, 128, 0.3)',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

});
