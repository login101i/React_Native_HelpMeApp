import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

import { AccountScreen } from "../account/screens/AccountScreen";
import { RegisterScreen } from "../account/screens/RegisterScreen";
import { LoginScreen } from "../account/screens/LoginScreen";


export const AccountNavigator = () => (


    <Stack.Navigator headerMode="none">
        <Stack.Screen
            name="Main"
            component={AccountScreen}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />
        <Stack.Screen
            name="Register"
            component={RegisterScreen}
        />
    </Stack.Navigator>
)

