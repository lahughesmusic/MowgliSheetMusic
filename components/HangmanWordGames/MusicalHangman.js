import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Platform,
} from 'react-native';
import wordsData from './words.json';
import noteImages from './helperMap';
import cardBackground from './Blank_Card_Template.png';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';

const musicalAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const { width, height } = Dimensions.get('window');

const screenLongSide = Math.max(width, height);
const screenShortSide = Math.min(width, height);

const isIpad =
    Platform.OS === 'ios' &&
    (Platform.isPad || (screenShortSide >= 768 && screenLongSide >= 1024));

const isSmallIphone = Platform.OS === 'ios' && screenShortSide < 400;

const rawScale = screenLongSide / 375;
const scale = isIpad
    ? Math.min(rawScale * 1.6, 3.5)
    : isSmallIphone
        ? Math.max(rawScale * 0.7, 0.9)
        : Math.max(Math.min(rawScale, 3), 1);

export default function MusicalHangman() {
    useFocusEffect(
        React.useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            return undefined;
        }, [])
    );

    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [randomImages, setRandomImages] = useState({});
    const [activeInputIndex, setActiveInputIndex] = useState(null);
    const [gameWon, setGameWon] = useState(false);
    const [lastWord, setLastWord] = useState('');

    const loadNewWord = () => {
        const wordList = wordsData.wordsData;
        let randomWord;
        do {
            randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        } while (randomWord.toLowerCase() === lastWord.toLowerCase());

        const lowerWord = randomWord.toLowerCase();
        setLastWord(lowerWord);

        const imageChoices = {};
        lowerWord.split('').forEach((letter, i) => {
            const options = noteImages[letter];
            if (Array.isArray(options) && options.length > 0) {
                imageChoices[i] = options[Math.floor(Math.random() * options.length)];
            }
        });

        const guessesInit = lowerWord.split('').map((letter) =>
            musicalAlphabet.includes(letter) ? '' : letter.toLowerCase()
        );

        setWord(lowerWord);
        setGuesses(guessesInit);
        setRandomImages(imageChoices);
        setGameWon(false);
        setActiveInputIndex(null);
    };

    useEffect(() => {
        loadNewWord();
    }, []);

    useEffect(() => {
        if (word && guesses.join('') === word && !gameWon) {
            setGameWon(true);
            Alert.alert('🎉 Congratulations!', 'You solved the word!', [
                { text: 'Next Word', onPress: () => loadNewWord() },
                { text: 'OK', style: 'cancel' },
            ]);
        }
    }, [guesses, word]);

    const handleInputTap = (index) => {
        if (musicalAlphabet.includes(word[index])) {
            setActiveInputIndex(index);
        }
    };

    const handleLetterSelect = (letter) => {
        if (activeInputIndex === null) return;

        const isCorrect = word[activeInputIndex] === letter;
        if (!isCorrect) {
            Alert.alert('Incorrect', 'Try again!');
            return;
        }

        const updatedGuesses = [...guesses];
        updatedGuesses[activeInputIndex] = letter;
        setGuesses(updatedGuesses);
        setActiveInputIndex(null);
    };

    const renderNoteAndInputColumns = () => (
        <View style={styles.columnRow}>
            {word.split('').map((letter, index) => {
                const image = randomImages[index];
                const isMusical = musicalAlphabet.includes(letter);
                const isActive = activeInputIndex === index;
                const guessed = guesses[index];

                return (
                    <View key={index} style={styles.columnWrapper}>
                        {isMusical && image ? (
                            <Image source={image} style={styles.noteImage} />
                        ) : (
                            <View style={styles.noteImagePlaceholder} />
                        )}

                        {isMusical ? (
                            <TouchableOpacity
                                style={[styles.displayInput, isActive && styles.activeInput]}
                                onPress={() => handleInputTap(index)}
                            >
                                <Text style={styles.displayInputText}>
                                    {guessed ? guessed.toUpperCase() : ''}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.displayInput}>
                                <Text style={styles.displayInputText}>
                                    {letter.toUpperCase()}
                                </Text>
                            </View>
                        )}
                    </View>
                );
            })}
        </View>
    );

    const renderLetterOptions = () => (
        <View style={styles.buttonGridWrapper}>
            <Text style={styles.pickMe}>PICK A NOTE!</Text>
            <View style={styles.buttonGrid}>
                {musicalAlphabet.map((letter) => (
                    <TouchableOpacity
                        key={letter}
                        style={styles.letterButton}
                        onPress={() => handleLetterSelect(letter)}
                    >
                        <Text style={styles.letterButtonText}>{letter.toUpperCase()}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <ImageBackground
            source={cardBackground}
            style={styles.cardBackground}
            resizeMode="stretch"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.wordWrapper}>
                    {renderNoteAndInputColumns()}
                    {renderLetterOptions()}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cardBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 8 * scale : 24 * scale,
        paddingBottom: 24 * scale,
    },
    pickMe: {
        fontWeight: 'bold',
        fontSize: 16 * scale,
        color: '#32cd32',
        marginTop: 4 * scale,
        marginBottom: 6 * scale,
        textAlign: 'center',
    },
    wordWrapper: {
        alignItems: 'center',
    },
    columnRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 2 * scale,
    },
    columnWrapper: {
        alignItems: 'center',
        marginHorizontal: 3 * scale,
    },
    noteImage: {
        width: 30 * scale,
        height: 50 * scale,
        resizeMode: 'contain',
        marginBottom: 1 * scale,
    },
    noteImagePlaceholder: {
        width: 30 * scale,
        height: 50 * scale,
        backgroundColor: 'transparent',
        marginBottom: 1 * scale,
    },
    displayInput: {
        width: 24 * scale,
        height: 20 * scale,
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 4 * scale,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 0,
    },
    activeInput: {
        borderColor: '#00f',
        backgroundColor: '#ddf',
    },
    displayInputText: {
        fontSize: 14 * scale,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    buttonGridWrapper: {
        marginTop: 6 * scale,
        alignItems: 'center',
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4 * scale,
    },
    letterButton: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#888',
        borderRadius: 2 * scale,
        paddingVertical: 2 * scale,
        paddingHorizontal: 5 * scale,
        marginHorizontal: 1 * scale,
        marginVertical: 1 * scale,
    },
    letterButtonText: {
        fontSize: 12 * scale,
        fontWeight: 'bold',
        color: '#000',
    },
});
