import { StyleSheet, Text, TextView, TextInput, View, ScrollView } from 'react-native';
const songs = require("./songs.json");
import { ImageBackground } from 'react-native';


export default function Next({ route, navigation }) {
    const hymns = route.params.hymns;
    const printSongs = songs[hymns]
    console.log("this is song: " + hymns)
    console.log("this is length: " + printSongs.length)
    const mapPrintSongs = printSongs.map(song =>
        <View style={{ marginLeft: 30 }}>
            <Text style={{ marginLeft: 30, flex: 1, fontWeight: 'bold', color: 'white', fontSize: 15, width: 250, textShadowRadius: 10, textShadowColor: 'black' }} key={song}>{song}</Text>
            <Text style={{ color: 'lightgrey' }}>_____________________</Text>
            <Text></Text>
        </View>
    )
    return (
        <ImageBackground>

            <ScrollView style="@style/Wrap">

                <Text style="@style/Wrap">{mapPrintSongs}
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