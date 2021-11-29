import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";

import { SettingsScreen } from "../settings/screens/SettingScreen";
import { FavouritesScreen } from "../../../src/features/favourites/screens/FavouritesScreen";
import { CameraScreen } from "../camera/screens/CameraScreen";


const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen} />
            <SettingsStack.Screen
                name="FavouritesDetails"
                component={FavouritesScreen}
            />
            <SettingsStack.Screen
                name="Camera"
                component={CameraScreen}
            />


        </SettingsStack.Navigator>
    );
};
