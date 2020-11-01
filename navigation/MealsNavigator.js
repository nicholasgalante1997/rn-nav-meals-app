import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import Colors from '../constants/Colors'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoriteScreen'

const defaultStackNavOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
}


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name='ios-restaurant' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name='ios-star' 
                size={25} 
                color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.accentColor,
    shifting: true
}) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        labelPosition: 'below-icon'
    }
});

export default createAppContainer(MealsFavTabNavigator);