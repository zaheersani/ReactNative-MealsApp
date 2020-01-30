import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meal Categories',
            }
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        },
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                }
            }
        },
        Favorites: {
            screen: FavouritesScreen,
            navigationOptions: {
                tabBarLabel: 'Favorites!',
                tabBarIcon: (tabInfo) => {
                    return <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }
);

export default createAppContainer(MealsFavTabNavigator);