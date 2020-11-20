// Initial loading of Meal Data, and assignment to Redux state
import {MEALS} from '../../data/dummy-data'
// Constants for Switch Statement 
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    // action handler
    switch (action.type) {
        // Logic for Favoriting/Unfavoriting Action
        case TOGGLE_FAVORITE:
            /* if the meal is currently favorited, it will return its index as a positive integer
            if the meal is yet to be favorited, it will return -1
            action is an argument accessible within the Switch/Case statement 
            provided from the initial definition of the function,
            the case TOGGLE_FAVORITE action takes a parameter of mealId in the object action */
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0){
                // removal of meal from favorites
                const updatedFavoriteMeals = [...state.favoriteMeals]
                updatedFavoriteMeals.splice(existingIndex, 1)
                return {...state, favoriteMeals: updatedFavoriteMeals}
            } else {
                // addition of meal to favorites
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS: 
        /*  we initially set the paramater taken in the case SET_FILTERS and assign it to 
        appliedFilters then we filter through the array of all Meals to check for 
        all of the conditions of the filters and only return true if the meal passes all of 
        the approved conditions */
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                return true
            })
            return {...state, filteredMeals: updatedFilteredMeals}
        default: 
            return state;
    }
}

export default mealsReducer

