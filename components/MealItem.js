import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={0.7}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.duration} min</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    mealRow: {
        flexDirection: "row"
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        height: '15%',
        alignItems: "center"
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: "center",
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
});

export default MealItem;