import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import songEntries from './Data1';

const ItemSeparatorView = () => {
    return (
        <View
            style={{
                height: 0.5,
                width: '95%',
                backgroundColor: 'black',
            }}
        />
    );
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songEntries: songEntries,
            searchValue: "",
        };
        this.arrayholder = songEntries;
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
            navigation.navigate('Next', { hymns: item.title });
        };

        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => getItem(item)}>
                <Text style={styles.item}>{item.title.toUpperCase()}</Text>
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
