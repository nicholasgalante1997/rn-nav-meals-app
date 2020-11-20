import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {MEALS} from '../data/dummy-data'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefText from '../components/DefaultText'
import {useSelector, useDispatch} from 'react-redux'
import {toggleFavorite} from '../store/actions/meals'

// IN REVISION MOVE TO A SEPARATE COMPONENT AND IMPORT 
const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefText>{props.children}</DefText>
        </View>
    )
}

// MAIN COMPONENT
const MealDetailScreen = (props) => {

    // CAN USE useSelector TO STORE SLICES OF REDUX STATE IN LOCAL VARIABLES
    const availableMeals = useSelector(state => state.meals.meals)
    // LOCAL VARIABLE ASSIGNMENT OF MEALID WHICH IS BEING PASSED THROUGH NAVIGATION
    // FROM THE CATEGORY MEALS SCREEN 
    const mealId = props.navigation.getParam('mealId')
    // ITERATE THROUGH ALL MEALS UNTIL YOU FIND THE CORRECT (self) MEAL && LOCAL VARIABLE ASSIGNMENT
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    // USE THE ARRAY METHOD some() TO CHECK IF THIS MEAL IS IN THE FAVORITES ARRAY THAT WE GET FROM Redux STATE useSelector
    const currentMealFavoriteStatus = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({
            isFav: currentMealFavoriteStatus
        })
    }, [currentMealFavoriteStatus])

    return ( 
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefText>
                    {selectedMeal.duration}m
                </DefText>
                <DefText>
                    {selectedMeal.complexity.toUpperCase()}
                </DefText>
                <DefText>
                    {selectedMeal.affordability.toUpperCase()}
                </DefText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => 
            <ListItem key={ingredient}>{ingredient}</ListItem>
            )}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => 
            <ListItem key={step}>{step}</ListItem>
            )}
        </ScrollView>
     );
}

MealDetailScreen.navigationOptions = navigationData => {
   const mealId = navigationData.navigation.getParam('mealId')
   const selectedMeal = MEALS.find(meal => meal.id === mealId)
   const toggleFavorite = navigationData.navigation.getParam('toggleFav')
   const isFavorite = navigationData.navigation.getParam('isFav')
   return {
       headerTitle: selectedMeal.title,
       headerRight: () => (
       <HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
           onPress={toggleFavorite} 
            />
       </HeaderButtons>
       )
   }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10

    }
})
 
export default MealDetailScreen;