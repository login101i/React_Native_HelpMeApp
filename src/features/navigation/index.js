import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from './AppNavigator'
import { authenticationContext } from './../../services/authentication/authenticationContext'


export const Navigation = () => {
    const { user, isLoading, error } = useContext(authenticationContext)

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>

    )
}