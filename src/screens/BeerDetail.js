import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';


export default function BeerDetail(props) {

    const [beer, setBeer] = useState([]);
    const {getParam} = props.navigation;


    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/' + getParam('id'))
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBeer(data[0]);
            });
    });
    return (
        <View>
            <View>
                <Text>{beer.name}</Text>
                <Text>{beer.title}</Text>
            </View>
        </View>
    );
}
