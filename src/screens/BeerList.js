import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

import BeerListItem from '../components/BeerListItem';

const styles = StyleSheet.create({
    deneme: {},
});

export default function BeerList(props) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        getBeers();

    }, [page]);

    function getBeers() {
        fetch('https://api.punkapi.com/v2/beers')
            .then((response) => {
                return response.json();
            })
            .then((beers) => {
                setData(beers);
            });
    }


    const {navigate} = props.navigation;

    return (
        <SafeAreaView>
            <View>
                <View style={styles.deneme}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigate('BeerDetail', {id: item.id})}>
                                <BeerListItem item={item}/>
                            </TouchableOpacity>)
                        }
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
}

