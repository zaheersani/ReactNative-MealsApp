import React from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {

    const renderGridItems = itemData => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params:
                        {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;