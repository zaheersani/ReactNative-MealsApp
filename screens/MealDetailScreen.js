import React from "react";
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(i => <ListItem key={i}>{i}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(s => <ListItem key={s}>{s}</ListItem>)}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: "center",
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
});

export default MealDetailScreen;