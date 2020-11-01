import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return ( 
        <MealList listData={displayedMeals} navigation={props.navigation} />
     );
}

CategoryMealScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selCategory = CATEGORIES.find(c => c.id === catId)
    return {
        headerTitle: selCategory.title
    }
}
 
export default CategoryMealScreen;