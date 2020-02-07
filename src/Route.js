import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BeerDetail from './screens/BeerDetail';
import BeerList from './screens/BeerList';
import BeerRandom from './screens/BeerRandom';

const Tab = createBottomTabNavigator({
    BeerRandom: {screen: BeerRandom},
    BeerList: {screen: BeerList},
});


const AppNavigator = createStackNavigator({
    BeerDetail: {
        screen: BeerDetail,
        navigationOptions: {
            headerShown: false,
        },
    },
    Home: {
        screen: Tab,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {initialRouteName: 'Home'});


const AppContainer = createAppContainer(AppNavigator);


function Route() {
    return (
        <AppContainer/>
    );
}

export default Route;
