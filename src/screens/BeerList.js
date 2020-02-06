import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import BeerListItem from '../components/BeerListItem';

const styles = StyleSheet.create({
    deneme: {},
});

export default function BeerList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?page=9&per_page=10')
            .then((response) => {
                return response.json();
            })
            .then((beers) => {
                setData(beers);
            });
    });

    const { navigate } = props.navigation;

    return (
        <View>
            <View style={styles.deneme}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigate('BeerDetail',{id:item.id})}>
                            <BeerListItem item={item}/>
                        </TouchableOpacity>)
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}

