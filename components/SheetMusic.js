import React from 'react';
import { StyleSheet, Image, ImageBackground, View, ScrollView, Dimensions } from 'react-native';
import songEntries from './Data1';

export default function SheetMusic({ route }) {
    const { title, category } = route.params;

    function getImagesByTitle(title, category) {
        if (!title || !category) return [];

        const match = songEntries.find(song =>
            song?.title?.toLowerCase().replace(/\s+/g, ' ').trim() === title.toLowerCase().replace(/\s+/g, ' ').trim() &&
            song?.category?.toLowerCase().replace(/\s+/g, ' ').trim() === category.toLowerCase().replace(/\s+/g, ' ').trim()
        );

        return match?.path || [];
    }

    const images = getImagesByTitle(title, category);


    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />
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
    image: {
        width: Dimensions.get('window').width,
        height: undefined,
        aspectRatio: 1, // You can adjust this if you know the general ratio (e.g. 8.5/11 for portrait sheet music)
        marginBottom: 10,
    }
});
