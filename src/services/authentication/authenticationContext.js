import React, { useState, useEffect, createContext } from 'react'
import { login } from './authenticationService'

export const authenticationContext = createContext()


export const authenticationContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticaded] = uUeState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = (email, user) => {
        setIsLoading(true)
        login(email, user)
            .then((u) => {
                setIsAuthenticaded(u)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false)
                setError(e)
            })
    }


    return (
        <authenticationContext value={{
            isAuthenticated,
            isLogin,
            error,
            loginUser
        }}>
            {children}
        </authenticationContext>
    )
}

export default authenticationContext
