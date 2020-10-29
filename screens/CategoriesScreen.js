import React from 'react';
import {View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList, 
    TouchableOpacity,
    Platform} from 'react-native'

import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {

        return (
        <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => {
            props.navigation.navigate({routeName: 'CategoryMeals'})
        }}
        >
         <View>
            <Text>
                {itemData.item.title}
            </Text>
        </View>
        </TouchableOpacity>
        );
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})
 
export default CategoriesScreen;