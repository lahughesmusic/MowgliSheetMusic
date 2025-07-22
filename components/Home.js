import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/image.jpg';
import Search from './Search';

export default function Home({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={image} resizeMode='cover' style={{ width: '100%', height: '100%' }}>
                <Search navigation={navigation} route={route} />
            </ImageBackground>
        </View>
    );
}
