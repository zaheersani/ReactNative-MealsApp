import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";

import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen</Text>
            <Text>{selectedMeal.ingredients}</Text>
            <Text>{selectedMeal.steps}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="F1"
                    iconName='ios-star-outline'
                    onPress={() => { }} />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen;