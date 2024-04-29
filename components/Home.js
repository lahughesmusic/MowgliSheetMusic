import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/images/crownOfThorns.png';
import Search from './SearchField';


export default function Home({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={image} resizeMode='cover' style={{ width: '100%', height: '100%' }}>

                <Search></Search>


            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    pressable: {
        marginTop: '10%',
        width: '100%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 9,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#a7d8de',
        fontFamily: 'Didot',
        fontWeight: 'bold',
        fontSize: 30
    },
    view: {
        marginTop: '10%',
    },

    container: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
        verticalAlign: 'middle',
        overflow: 'hidden',
    }

});

