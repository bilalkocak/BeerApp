import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import Table from '../components/Table';

import { COLOR_1, COLOR_3 } from '../color';


const styles = StyleSheet.create({
  beerDetailContainer: {
    alignItems: 'center',
  },
  beerName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
    textAlign: 'center',
  },
  beerImage: {
    width: 80,
    height: 300,
  },
  beerCardContainer: {
    padding: 20,
    width: 350,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: COLOR_3,
    marginTop: 20,
    marginBottom: 20,
  },
  beerInfo: {
    backgroundColor: COLOR_1,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
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


export default function BeerDetail(props) {
  const [beer, setBeer] = useState([]);
  const { navigation } = props;


  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${navigation.getParam('id')}`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data[0]);
      });
  }, []);

  function methodDataHelper(tag, deneme) {
    const array = [];
    deneme.map((item) => array.push(
      (`${item.temp.value} ${item.temp.unit} ${item.duration !== null && item.duration !== undefined ? `${item.duration} min` : ''}`).toString(),
    ));

    return { firstCell: tag, secondCell: array };
  }

  function ingredientsDataHelper(tag, deneme) {
    const array = [];
    deneme.map((item) => array.push(
      {
        firstCell: item.name.substring(0, 10),
        secondCell: (`${item.amount.value} ${item.amount.unit}`).toString(),
      },
    ));

    return array;
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.beerDetailContainer}>
          <View style={styles.beerCardContainer}>
            <Image
              source={{
                uri: beer.image_url,
              }}
              style={styles.beerImage}
            />
            <View style={styles.beerInfo}>
              <Text style={styles.beerName}>{beer.name}</Text>
              <Table data={[
                { firstCell: 'Tagline', secondCell: beer.tagline },
                { firstCell: 'First Brewed', secondCell: beer.first_brewed },
                { firstCell: 'Description', secondCell: beer.description },
              ]}
              />
            </View>
            <View style={[styles.beerInfo]}>
              <Table data={[
                { firstCell: 'ABV', secondCell: beer.abv },
                { firstCell: 'IBU', secondCell: beer.ibu },
                { firstCell: 'Taget Fg', secondCell: beer.target_fg },
                { firstCell: 'Taget Og', secondCell: beer.target_og },
              ]}
              />

              <Table data={[
                { firstCell: 'EBC', secondCell: beer.ebc },
                { firstCell: 'SRM', secondCell: beer.srm },
                { firstCell: 'pH', secondCell: beer.ph },
                { firstCell: 'Attenuation', secondCell: beer.attenuation_level },
              ]}
              />
            </View>
            <View style={[styles.beerInfo]}>
              {
                                beer.volume
                                && (
                                <Table data={[
                                  { firstCell: 'Volume', secondCell: `${beer.volume.value} ${beer.volume.unit}` },
                                  {
                                    firstCell: 'Boil Volume',
                                    secondCell: `${beer.boil_volume.value} ${beer.boil_volume.unit}`,
                                  },
                                ]}
                                />
                                )
                            }
            </View>
            <View style={[styles.beerInfo]}>
              <Text style={styles.beerName}>Method</Text>
              {
                                beer.method
                                && (
                                <Table data={[
                                  methodDataHelper('Mash Temp', beer.method.mash_temp),
                                  methodDataHelper('Fermentation', [beer.method.fermentation]),
                                  { firstCell: 'Twist', secondCell: beer.method.twist ? beer.method.twist : ' - ' },
                                ]}
                                />
                                )
                            }
            </View>
            <View style={[styles.beerInfo]}>
              <Text style={styles.beerName}>Ingredients</Text>
              {
                                beer.ingredients
                                && <Table data={ingredientsDataHelper('Ingredients', beer.ingredients.malt)} />
                            }
            </View>
            <View style={styles.beerInfo}>
              <Table data={[
                { firstCell: 'Food Pairing', secondCell: beer.food_pairing },
                { firstCell: 'Contributor', secondCell: beer.contributed_by },
              ]}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>


  );
}

BeerDetail.propTypes = {
  navigation: PropTypes.shape.isRequired,
};
