import React, { useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
    ScrollView,
    SafeAreaView
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';
import image from '../assets/image.jpg';

const songCategories = [
    "One Hand", "One Hand, 8th Notes", "C Position", "C Position, 8th Notes",
    "Middle C Position", "Middle C Position, 8th Notes", "Show All"
];

export default function SongCategoryScreen({ navigation }) {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    // 🔒 Force portrait orientation when screen is focused
    useFocusEffect(
        useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            return () => {
                ScreenOrientation.unlockAsync(); // optional unlock when screen is blurred
            };
        }, [])
    );

    const handlePress = (category) => {
        navigation.navigate('Search', { category });
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {songCategories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            style={[styles.button, isTablet && styles.buttonTablet]}
                            onPress={() => handlePress(cat)}
                        >
                            <Text
                                style={[styles.buttonText, isTablet && styles.buttonTextTablet]}
                                numberOfLines={2}
                                adjustsFontSizeToFit
                                minimumFontScale={0.5}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    button: {
        width: '90%', // replaces stretch
        maxWidth: 400,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(128, 128, 190, .7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
    },

    buttonTablet: {
        paddingVertical: 16,
        paddingHorizontal: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    buttonTextTablet: {
        fontSize: 44,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: 'black',
    },

});
