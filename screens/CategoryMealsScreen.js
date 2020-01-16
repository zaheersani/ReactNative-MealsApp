import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }} />
        </View>
    );
}

// NavigationOptions is Function for dynamic data changes
CategoryMealsScreen.navigationOptions = navigationData => {
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
        alignItems: "center"
    }
});

export default CategoryMealsScreen;