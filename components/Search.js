import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Next from './Next';
import DATA from './Data1'
const songs = require("./songs.json");



//VISUALLY SEPARATES TOPICS
const ItemSeparatorView = () => {
    return (
        // Flat List Item Separator
        <View
            style={{
                height: 0.5,
                width: '95%',
                backgroundColor: 'black',
            }}
        />
    );
};

//IF YOU NEED EASY LIST OF TOPICS
// const topicArray = Object.keys(topics)

//PRINTING OUT ASSOCIATED VERSES, YOU WILL NEED THIS LATER
function matchTopic(songHymns) {
    console.log(DATA[songHymns])
}



// ACTUAL SEARCH COMPONENT
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: DATA,
            error: null,
            searchValue: "",
            selected: false,
            hymns: ""
        };
        this.arrayholder = DATA;
    }
    //SEARCH BAR FUNCTIONALITY
    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text });
    };

    render() {
        const { navigation } = this.props;

        // GET NAME OF SELECTED TOPIC
        let songHymns = []
        const getItem = (item) => {
            console.log(item.title);
            songHymns = item.title
            matchTopic(songHymns)
            this.state.selected = true;
            this.state.hymns = songHymns;
            console.log(this.state.selected)
            navigation.navigate('Hymns', { hymns: this.state.hymns })
        };
        //THIS IS WHAT RENDERS THE FLATLIST
        const renderItem = ({ item }) =>
            <TouchableOpacity
                onPress={() => getItem(item)}>
                <Text style={styles.item}>
                    {item.title.toUpperCase()}
                </Text>
            </TouchableOpacity>

        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search Here..."
                    darkTheme
                    round
                    value={this.state.searchValue}
                    onChangeText={(text) => this.searchFunction(text)}
                    autoCorrect={false}
                    keyboardType={'ascii-capable'}
                />
                <FlatList
                    style={styles.item}
                    data={this.state.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={ItemSeparatorView}
                />
            </View>
        );
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <Search {...props} navigation={navigation} />
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 2,
        textAlign: 'center',
        backgroundColor: 'hsla(14, 6%, 1%, 0.40)',
    },
    item: {
        backgroundColor: 'hsla(14, 6%, 1%, 0.40)',
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 15,
        borderRadius: 9,
        textAlign: 'center',
        color: 'white',
        textShadowRadius: 10,
        textShadowColor: 'black',
        fontSize: 17,

    },

});
