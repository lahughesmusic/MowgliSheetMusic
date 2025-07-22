import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function FlashcardViewer({ route }) {
    const { cards } = route.params;
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const currentCard = cards[index];

    const handleNext = () => {
        setShowAnswer(false);
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const handleFlip = () => {
        if (currentCard.answer) {
            setShowAnswer((prev) => !prev);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleFlip} style={styles.card}>
                <Image
                    source={
                        currentCard.static
                            ? currentCard.static
                            : showAnswer
                                ? currentCard.answer
                                : currentCard.question
                    }
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        width: width - 40,
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    nextButton: {
        padding: 15,
        backgroundColor: 'gray',
        borderRadius: 10,
        marginBottom: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
