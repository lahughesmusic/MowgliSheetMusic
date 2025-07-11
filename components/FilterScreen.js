import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/image.jpg'

const categories = ["One Hand", "One Hand, 8th Notes", "C Position", "C Position, 8th Notes", "Middle C Position", "Middle C Position, 8th Notes"];

export default function FilterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={{ width: '100%', height: '100%' }}>
                <Text style={styles.header}></Text>
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={styles.button}
                        onPress={() => navigation.navigate('Search', { category: cat })}
                    >
                        <Text style={styles.buttonText}>{cat}</Text>
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
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: 'hsla(100, 5%, 3%, 0.7)',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
