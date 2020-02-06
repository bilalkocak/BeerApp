import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import BeerDetail from './screens/BeerDetail';
import BeerList from './screens/BeerList';

const AppNavigator = createStackNavigator({
    BeerList: {
        screen: BeerList,
    },
    BeerDetail: {
        screen: BeerDetail,
    },
}, {initialRouteName: 'BeerList'});

const AppContainer = createAppContainer(AppNavigator);

function Route() {
    return (
        <AppContainer/>
    );
}

export default Route;
