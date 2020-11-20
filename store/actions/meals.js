/* OK this file's a little wonky because the react native tutor on Udemy and i have
religious differences, but i dont think this constant designation is neccessary at all. 
That being said, great guy. */

// CONSTANT DESIGNATION
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'

// NEEDS TO TAKE IN AN ARGUMENT OF ID TO PASS OVER TO THE TOGGLE FAVORITE 
// THEN THE CASE STATEMENT CAN MAKE USE OF THIS ARGUMENT THROUGH action.mealId
// HOWEVER LIKE I SAID THIS FILES WONKY- IN REVISION LETS REVERT TO THE ACTION/PAYLOAD SCHEMA 
export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id}
}

// NEEDS TO TAKE AN ARGMENT THAT IS AN OBJECT OF FILTER SETTINGS
export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings}
}