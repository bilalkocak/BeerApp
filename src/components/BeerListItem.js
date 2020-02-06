import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'row',
    },
    img: {
        height: 180
    },
    beerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    beerDescription: {
        fontSize: 14,
        marginTop: 10,
    },
    infoContainer: {
        flex: 5,
    },
    imageContainer: {
        flex: 1,
    }
});

const BeerListItem = (props) => {
    const { item } = props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.img}
                    source={{
                        uri: item.image_url,
                    }}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.beerTitle}>{item.name}</Text>
                <Text style={styles.beerDescription}>{item.description}</Text>
            </View>
        </View>

    );
};


BeerListItem.propTypes = {
    item: PropTypes.object,
};

export default BeerListItem;
