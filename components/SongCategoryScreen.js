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

const songCategories = [
    "One Hand", "One Hand, 8th Notes", "C Position", "C Position, 8th Notes",
    "Middle C Position", "Middle C Position, 8th Notes", "Show All"
];

export default function SongCategoryScreen({ navigation }) {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    const handlePress = (category) => {
        navigation.navigate('Search', { category });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {songCategories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={[styles.button, isTablet && styles.buttonTablet]}
                        onPress={() => handlePress(cat)}
                    >
                        <Text style={[styles.buttonText, isTablet && styles.buttonTextTablet]}>
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
        paddingHorizontal: 20,
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
        paddingVertical: 12, // smaller buttons on tablet
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textAlign: 'center'
    },
    buttonTextTablet: {
        fontSize: 44, // keep this large
    },
});
