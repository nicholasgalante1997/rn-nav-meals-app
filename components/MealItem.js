import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, ImageEditor} from 'react-native'
import DefText from './DefaultText'

const MealItem = (props) => {
    return ( 
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground 
                source={{
                    uri: props.imageUrl
                }} 
                style={styles.bgImage} 
                >
            <Text style={styles.title}>
                {props.title}
            </Text>
            </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetails}}>
                <DefText>
                    {props.duration}m
                </DefText>
                <DefText>
                    {props.complexity.toUpperCase()}
                </DefText>
                <DefText>
                    {props.affordability.toUpperCase()}
                </DefText>
            </View>
        </View>
        </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
})
 
export default MealItem;