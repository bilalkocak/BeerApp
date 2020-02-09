import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BeerDetail from './screens/BeerDetail';
import BeerList from './screens/BeerList';
import BeerRandom from './screens/BeerRandom';
import {COLOR_1, COLOR_2, COLOR_3} from './color';

const Tab = createBottomTabNavigator({
        BeerList: {screen: BeerList, navigationOptions: {tabBarLabel: 'Beer List'}},
        Suggest: {screen: BeerRandom, navigationOptions: {tabBarLabel: 'Suggest'}},
    }, {
        initialRouteName: 'BeerList',
        tabBarOptions: {
            style: {
                borderBottomColor: COLOR_1,
                borderBottomWidth: 5,
                backgroundColor: COLOR_3,
            },
            labelStyle: {
                fontSize: 18,
                textAlign: 'center',
                color: COLOR_1,
                marginBottom: 7,
            },
        },
    },
);


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
