import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from "./MealItem";

const MealList = props => {

    const renderMealItem = itemData => {
        return (<MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate(
                    {
                        routeName: 'MealDetail',
                        params: {
                            'mealId': itemData.item.id
                        }
                    })
            }}
        />);
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={props.listData}
                renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        width: '100%',
        padding: 10
    }
});

export default MealList;