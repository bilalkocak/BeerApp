import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


export default function Table(props) {
    const {data} = props;

    return (
        <View style={styles.tableContainer}>
            {
                data.map((item, index) => {
                    return (
                        <View key={index} style={styles.tableRow}>
                            <View style={styles.tableRowFirstCell}>
                                <Text style={[styles.whiteText, styles.tableRowFirstCellText]}>{item.firstCell}:</Text>
                            </View>
                            <View style={styles.tableRowSecondCell}>
                                {
                                    Array.isArray(item.secondCell) ? item.secondCell.map((x, i) =>
                                            (
                                                <Text key={i} style={styles.whiteText}>{x}.</Text>
                                            ),
                                        ) :
                                        (<Text style={styles.whiteText}>{item.secondCell}</Text>)
                                }</View>

                        </View>
                    );
                })
            }
        </View>
    );
};


Table.propTypes = {
    data: PropTypes.array.isRequired,
};


const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white',
    },
    tableRowFirstCell: {
        flex: 1,
    },
    tableRowFirstCellText: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right',
    },
    tableRowSecondCell: {
        flex: 2,
    },
    tableRow: {
        flexDirection: 'row',
    },
});
