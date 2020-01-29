import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return (<MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelect={() => { }}
        />);
    }

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={displayedMeals}
                renderItem={renderMealItem}
            />
        </View>
    );
}

// NavigationOptions is Function for dynamic data changes
CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
});

export default CategoryMealScreen;