import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import {MEALS} from '../data/dummy-data'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import {useSelector} from 'react-redux'

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <Text>You dont have any favorite meals! Picky bitch!</Text>
            </View>
        )
    }
    return ( 
        <MealList listData={favMeals} navigation={props.navigation} />
     );
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Favs',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer()
        }} />
    </HeaderButtons>
    )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

 
export default FavoritesScreen;