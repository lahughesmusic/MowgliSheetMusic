import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    Platform
} from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallIphone = Platform.OS === 'ios' && Math.min(width, height) < 400;
const scale = isSmallIphone ? 3 : width / 375;

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
            <Text style={styles.hint}>Click Card For Answer!</Text>
            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>

                <Text style={styles.buttonText}>{'-->'}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey', // 🌤️ baby blue
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 * scale,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        width: width * 0.8 * scale,
        marginVertical: 20 * scale,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10 * scale,
    },
    nextButton: {
        paddingVertical: 4 * scale,
        paddingHorizontal: 15 * scale,
        backgroundColor: 'green',
        borderRadius: 10 * scale,
        marginBottom: 40 * scale,
    },
    buttonText: {
        color: 'magenta',
        fontSize: 16 * scale,
        textAlign: 'center',
    },
    hint: {
        color: 'magenta',
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
    },
});
