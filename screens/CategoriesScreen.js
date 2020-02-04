import React from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {

    const renderGridItems = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params:
                        {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        );
    };

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItems}
        />
    );
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default CategoriesScreen;