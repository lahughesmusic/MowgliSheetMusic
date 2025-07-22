import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import FlashcardData from './FlashcardData'; // make sure this is the correct path
import image from '../../assets/image.jpg';

const subcategories = ['BassClef', 'TrebleClef'];

export default function NoteRecognitionSubcategoryScreen({ navigation }) {
    const handlePress = (subcategory) => {
        const cards = FlashcardData.NoteRecognition[subcategory];
        if (cards) {
            navigation.navigate('FlashcardViewer', { cards });
        } else {
            alert('No cards found for this subcategory.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {subcategories.map((sub) => (
                    <TouchableOpacity
                        key={sub}
                        style={styles.button}
                        onPress={() => handlePress(sub)}
                    >
                        <Text style={styles.buttonText}>{sub}</Text>
                    </TouchableOpacity>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    background: { flex: 1, justifyContent: 'center' },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
});
