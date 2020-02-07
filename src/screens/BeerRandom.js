import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, RefreshControl, ImageBackground} from 'react-native';
import Button from '../components/Button';
import Table from '../components/Table';

export default function BeerRandom(props) {

    const [beer, setBeer] = useState([]);

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }


    const [refreshing, setRefreshing] = React.useState(false);


    const {navigate} = props.navigation;


    useEffect(() => {
        getRandomBeer();
    }, []);

    function getRandomBeer() {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBeer(data[0]);
            });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getRandomBeer();

        wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);


    return (
        <ScrollView contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }>
            <View style={styles.randomBeerContainer}>
                <View style={styles.beerCardContainer}>

                    <Image source={{
                        uri: beer.image_url,
                    }} style={styles.beerImage}/>
                    <View style={styles.beerInfo}>
                        <Text style={styles.beerName}>{beer.name}</Text>
                        <Table data={[
                            {firstCell: 'Contributor', secondCell: beer.contributed_by},
                            {firstCell: 'First Brewed', secondCell: beer.first_brewed},
                            {firstCell: 'Food Pairing', secondCell: beer.food_pairing, isArray: true},
                        ]}/>
                    </View>
                    <Button backgroundColor={'#F8646C'} text={'GO DETAIL'} onPress={() => navigate('BeerDetail', {id: beer.id})} width={300}/>
                </View>
            </View>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#575866',

    },
    randomBeerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    beerName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    beerImage: {
        width: 80,
        height: 300,
        marginBottom: 10,
    },
    beerCardContainer: {
        padding: 20,
        width: 350,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#71788A',
    },
    beerInfo: {
        backgroundColor: '#F8646C',
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    tableRowFirstCell: {
        color: 'white',
        flex: 5,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right',
    },
    tableRowSecondCell: {
        color: 'white',
        flex: 12,
    },
    beerInfoLine: {
        flexDirection: 'row',
    },

});

