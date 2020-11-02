import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    if (displayedMeals.length === 0){
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>There are no meals that fit your filter criteria!</Text>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
})
 
export default CategoryMealScreen;