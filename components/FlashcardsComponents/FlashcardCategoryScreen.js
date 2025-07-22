import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import image from '../../assets/image.jpg';
import flashcards from './FlashcardData'; // adjust path if needed




const categories = ['NoteRecognition', 'Rhythm', 'Symbols'];
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export default function FlashcardCategoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={styles.button}
                        onPress={() => {
                            if (category === 'NoteRecognition') {
                                navigation.navigate('NoteRecognitionSubcategories');
                            } else {
                                const shuffledCards = shuffleArray(flashcards[category]);
                                navigation.navigate('FlashcardViewer', { cards: shuffledCards });
                            }
                        }}

                    >
                        <Text style={styles.buttonText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: 'black' },
    background: { width: '100%', height: '100%', paddingHorizontal: 20, justifyContent: 'center' },
    button: {
        marginVertical: 10,
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
