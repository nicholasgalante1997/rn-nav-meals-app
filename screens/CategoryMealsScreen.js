import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = (props) => {

    const renderMealItem = (itemData) => {
        return (
           <MealItem 
           title={itemData.item.title} 
           onSelectMeal={() => {}} 
           duration={itemData.item.duration} 
           complexity={itemData.item.complexity} 
           affordability={itemData.item.affordability} 
           imageUrl={itemData.item.imageUrl}/>
        )
    }

    const categoryId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return ( 
        <View style={styles.screen}>
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item, index) => item.id} 
            renderItem={renderMealItem} 
            style={{width: '100%'}} />
        </View>
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
        alignItems: 'center',
        padding: 15
    }
})
 
export default CategoryMealScreen;