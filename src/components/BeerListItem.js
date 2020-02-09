import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#F8646C',

    },
    img: {
        height: 220,
    },
    beerTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    beerDescription: {
        fontSize: 14,
        marginTop: 10,
        color: 'white',
    },
    infoContainer: {
        flex: 5,
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    beerTagline: {
        fontSize: 15,
        color: 'white',
    },
});

const BeerListItem = (props) => {
    const {item} = props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.beerTitle}>{item.name}</Text>
                <Text style={styles.beerTagline}>{item.tagline}</Text>
                <Text style={styles.beerDescription}>{item.description.substring(0, 150) + '...'}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.img}
                    source={{
                        uri: item.image_url,
                    }}
                />
            </View>
        </View>

    );
};


BeerListItem.propTypes = {
    item: PropTypes.object,
};

export default BeerListItem;
