import React, { useCallback } from 'react';
import {
    StyleSheet,
    Image,
    ScrollView,
    useWindowDimensions,
    View
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';
import songEntries from './Data1';

export default function SheetMusic({ route }) {
    const { title, category } = route.params;
    const { width, height } = useWindowDimensions();

    useFocusEffect(
        useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            return () => ScreenOrientation.unlockAsync();
        }, [])
    );

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
                <View key={index} style={{ width, height, paddingBottom: 20 }}>
                    <Image
                        source={image}
                        style={styles.image}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
});
