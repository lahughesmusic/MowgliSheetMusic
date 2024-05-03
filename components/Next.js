import { StyleSheet, Text, TextView, TextInput, View, ScrollView } from 'react-native';
const hymns = require("./songs.json");
import { ImageBackground } from 'react-native';
import image from '../assets/image.jpg';
import Pdf from 'react-native-pdf';



export default function Next({ route, navigation }) {
    const songs = route.params.songs;
    const printSong = hymns[songs]
    console.log("this is song: " + songs)
    console.log("this is length: " + printSong.length)
    const mapPrintSong = printSong.map(song =>
        <View style={{ marginLeft: 30 }}>
            <Text style={{ marginLeft: 30, flex: 1, fontWeight: 'bold', color: 'white', fontSize: 15, width: 250, textShadowRadius: 10, textShadowColor: 'black' }} key={song}>{song}</Text>
            <Text style={{ color: 'lightgrey' }}>_____________________</Text>
            <Pdf
                source={{}}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
            />
        </View>
    )
    return (
        <ImageBackground source={image} resizeMode='cover' style={{ width: '100%', height: '100%', color: 'white' }}>

            <ScrollView style="@style/Wrap">

                <Text style="@style/Wrap">{mapPrintSong}
                </Text>

            </ScrollView>

        </ImageBackground>
    )
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