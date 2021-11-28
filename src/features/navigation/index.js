import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from './AccountNavigator'
import {AppNavigator} from './AppNavigator'
import { AuthenticationContext } from './../../services/authentication/AuthenticationContext'


export const Navigation = () => {
    const { user, isLoading, error } = useContext(AuthenticationContext)

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>

    )
}