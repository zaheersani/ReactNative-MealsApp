import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = props => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default MealItem;