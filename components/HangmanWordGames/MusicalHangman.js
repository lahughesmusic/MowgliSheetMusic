import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground

} from 'react-native';
import wordsData from './words.json';
import noteImages from './helperMap';
import cardBackground from './Blank_Card_Template.png';


const musicalAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const { width } = Dimensions.get('window');
const scale = width / 375;

export default function MusicalHangman() {
    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [inputRefs, setInputRefs] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const [randomImages, setRandomImages] = useState({});
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

        // ✅ Only this one stays
        const guessesInit = lowerWord.split('').map(letter =>
            musicalAlphabet.includes(letter) ? '' : letter
        );
        setGuesses(guessesInit);

        setWord(lowerWord);
        setInputRefs(Array(lowerWord.length).fill().map(() => React.createRef()));
        setRandomImages(imageChoices);
        setGameWon(false);
    };


    useEffect(() => {
        loadNewWord();
    }, []);

    useEffect(() => {
        if (word && guesses.join('') === word && !gameWon) {
            setGameWon(true);
            Alert.alert(
                '🎉 Congratulations!',
                'You solved the word!',
                [
                    {
                        text: 'Next Word',
                        onPress: () => loadNewWord(),
                    },
                    {
                        text: 'OK',
                        style: 'cancel',
                    }
                ],
                { cancelable: true }
            );
        }
    }, [guesses, word]);

    const handleGuess = (text, index) => {
        if (text.length > 1 || (text && !/^[a-zA-Z]$/.test(text))) return;

        const isMusical = musicalAlphabet.includes(word[index]);
        const newGuesses = [...guesses];
        newGuesses[index] = text.toLowerCase();

        if (isMusical && text.toLowerCase() !== word[index]) {
            Alert.alert('Incorrect', 'Try another letter!');
            return; // ❌ don't clear it — just don't accept it
        }

        setGuesses(newGuesses);

        if (index < word.length - 1) {
            inputRefs[index + 1]?.current?.focus();
        }
    };

    const renderLetter = ({ index }) => {
        const letter = word[index];
        const isMusical = musicalAlphabet.includes(letter);
        const note = randomImages[index];

        return (
            <View key={`input-${index}`} style={styles.letterStack}>
                {isMusical && note ? (
                    <Image source={note} style={styles.noteImage} />
                ) : (
                    <View style={styles.noteImagePlaceholder} />
                )}
                <TextInput
                    style={[
                        styles.input,
                        !isMusical && { backgroundColor: '#eee' }
                    ]}
                    value={(guesses[index] || '').toUpperCase()}
                    onChangeText={text => handleGuess(text, index)}
                    maxLength={1}
                    ref={inputRefs[index]}
                    autoCapitalize="none"
                    editable={!gameWon || !isMusical}
                    textAlign="center"
                />
            </View>
        );
    };


    if (!word) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={cardBackground}
            style={styles.cardBackground}
            resizeMode="stretch"
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.wordWrapper}>
                    <View style={styles.inputRow}>
                        {guesses.map((_, index) => renderLetter({ index }))}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20 * scale,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 36 * scale,
        fontWeight: 'bold',
        marginBottom: 30 * scale,
    },
    noteImage: {
        width: 40 * scale,
        height: 65 * scale,
        resizeMode: 'contain',
        marginBottom: 5 * scale,
    },
    noteImagePlaceholder: {
        width: 40 * scale,
        height: 65 * scale,
        marginBottom: 5 * scale,
        backgroundColor: 'transparent',
    },
    input: {
        width: 40 * scale,
        height: 50 * scale,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6 * scale,
        fontSize: 22 * scale,
        textAlign: 'center',
    },
    letterStack: {
        alignItems: 'center',
        marginHorizontal: 6 * scale,
        marginVertical: 10 * scale,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20 * scale,
    },
    inputRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    wordWrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20 * scale,
    },
    cardBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
