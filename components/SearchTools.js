import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation, useRoute } from '@react-navigation/native';
import songEntries from './Data1';

function sortAndReassignIds(entries) {
    const copy = [...entries];
    copy.sort((a, b) => a.title.localeCompare(b.title));
    copy.forEach((entry, index) => {
        entry.id = (index + 1).toString();
    });
    return copy;
}
function sortAndReassignIds(entries) {
    const copy = [...entries];
    copy.sort((a, b) => a.title.localeCompare(b.title));
    copy.forEach((entry, index) => {
        entry.id = (index + 1).toString();
    });
    return copy;
}

const sortedSongEntries = sortAndReassignIds(songEntries);

const ItemSeparatorView = () => (
    <View style={{ height: 0.5, width: '95%', backgroundColor: 'black' }} />
);

class Search extends Component {
    constructor(props) {
        super(props);

        const category = props.route?.params?.category;
        console.log("Category received from FilterScreen:", category);


        const filtered =
            category && category !== "Show All"
                ? sortedSongEntries.filter((s) => s.category === category)
                : sortedSongEntries;

        this.state = {
            songEntries: filtered,
            searchValue: "",
        };

        this.arrayholder = filtered;
    }

    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.title.toUpperCase()}`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ songEntries: updatedData, searchValue: text });
    };



    render() {
        const { navigation } = this.props;

        const getItem = (item) => {
            navigation.navigate('SheetMusic', { Songs: item.title, category: item.category });

        };

        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => getItem(item)}>
                <Text style={styles.item}>{item.title.toUpperCase()}</Text>
                <Text style={styles.itemSubtitle}>{item.category}</Text>
            </TouchableOpacity>
        );

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
                    data={this.state.songEntries}
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
    const route = useRoute(); // ✅ This gives you access to route.params
    return <Search {...props} navigation={navigation} route={route} />;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 2,
        backgroundColor: 'hsla(14, 90%, 10%, 0.40)',
    },
    item: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowRadius: 50,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    itemSubtitle: {
        textAlign: 'center',
        color: '#ddd',
        fontSize: 16,
        marginTop: 4,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});
