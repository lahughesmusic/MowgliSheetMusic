import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView, Dimensions } from 'react-native';
import songEntries from './Data1';

export default function Next({ route, navigation }) {
    const songTitle = route.params.hymns;

    function getImagesByTitle(title) {
        const entry = songEntries.find(song => song.title === title);
        return entry ? entry.images : [];
    }

    const images = getImagesByTitle(songTitle);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
            {images.map((image, index) => (
                <ImageBackground key={index} source={image} style={styles.imageBackground} resizeMode='stretch'>
                    {/* Add other components like text or buttons here if needed */}
                </ImageBackground>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0, // Ensure no padding in the container
        margin: 0, // Ensure no margin in the container
    },
    scrollViewContent: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0, // Ensure no padding in the scroll view content
        margin: 0, // Ensure no margin in the scroll view content
    },
    imageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0, // Ensure no padding in the image background
        margin: 0, // Ensure no margin in the image background
    },
});

