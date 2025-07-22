import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView, Dimensions } from 'react-native';
import songEntries from './Data1';

export default function SheetMusic({ route }) {
    const { Songs, category } = route.params;

    function getImagesByTitle(title, category) {
        const entry = songEntries.find(song => song.title === title && song.category === category);
        return entry ? (Array.isArray(entry.path) ? entry.path : [entry.path]) : [];
    }

    const images = getImagesByTitle(Songs, category);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
            {images.map((image, index) => (
                <ImageBackground key={index} source={image} style={styles.imageBackground} resizeMode='stretch' />
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        margin: 0,
    },
    scrollViewContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        margin: 0,
    },
    imageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
