import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image, Text, View, ScrollView, Button } from 'react-native';
import songEntries from './Data1';

export default function Next({ route, navigation }) {

    const songTitle = route.params.hymns;

    function getPathByTitle(title) {
        const entry = songEntries.find(song => song.title === title);
        return entry ? entry.path : null;

    }


    // Usage example
    const title = songTitle;
    const path = getPathByTitle(title);
    console.log('+++' + path);

    return (
        <View>
            <ImageBackground source={path} resizeMode='cover' style={{ width: '100%', height: '100%' }}>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        padding: 50,
        width: "100%",
    },
});
