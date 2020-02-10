import React, { useState, useEffect } from 'react';
import {
  View, FlatList, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { PropTypes } from 'prop-types';

import BeerListItem from '../components/BeerListItem';

export default function BeerList(props) {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const { navigation } = props;

  function getBeers() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((beers) => {
        setData(beers);
      });
  }

  useEffect(() => {
    getBeers();
  }, [page]);


  return (
    <SafeAreaView>
      <View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('BeerDetail', { id: item.id })}>
                <BeerListItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>

  );
}

BeerList.propTypes = {
  navigation: PropTypes.shape.isRequired,
};
