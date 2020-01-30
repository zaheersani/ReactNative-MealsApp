import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.gridItem}
            onPress={props.onSelect}
        >
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 4,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // For iOS Elevation Effect
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textAlign: 'right'
    }
});

export default CategoryGridTile;