import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
}

FavouritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorite',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default FavouritesScreen;