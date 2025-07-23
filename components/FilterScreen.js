import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
} from 'react-native';
import image from '../assets/image.jpg';

const homeCategories = ['Songs', 'Musical Hangman', 'Flashcards'];

export default function FilterScreen({ navigation }) {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    const handlePress = (cat) => {
        if (cat === 'Musical Hangman') {
            navigation.navigate('MusicalHangman');
        } else if (cat === 'Flashcards') {
            navigation.navigate('FlashcardCategories');
        } else if (cat === 'Songs') {
            navigation.navigate('SongCategoryScreen');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {homeCategories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={[styles.button, isTablet && styles.buttonTablet]}
                        onPress={() => handlePress(cat)}
                    >
                        <Text
                            style={[styles.buttonText, isTablet && styles.buttonTextTablet]}
                            numberOfLines={2}
                            adjustsFontSizeToFit
                        >
                            {cat}
                        </Text>
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
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(128, 128, 190, .7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 300,
        alignSelf: 'center',
        borderColor: 'black',
        border: '8px solid black'
    },
    buttonTablet: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 300,
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    buttonTextTablet: {
        fontSize: 48,
    },
});
