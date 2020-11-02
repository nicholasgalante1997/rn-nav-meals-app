import React from 'react';
import {View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList, 
    TouchableOpacity
} from 'react-native'

import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import CategoryGridTile from '../components/CategoryGridTile'

import {CATEGORIES} from '../data/dummy-data'
import CategoryMealScreen from './CategoryMealsScreen';


const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {

        return (<CategoryGridTile 
        color={itemData.item.color}
        title={itemData.item.title} 
        onSelect={() => {
            props.navigation.navigate({routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id
            }})
        }} />
        )
    }

    console.log(props)
    return ( 
        <FlatList 
        keyExtractor={(item, index) => item.id }
        data={CATEGORIES} 
        numColumns={2} 
        renderItem={renderGridItem}/>
     );
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default CategoriesScreen;