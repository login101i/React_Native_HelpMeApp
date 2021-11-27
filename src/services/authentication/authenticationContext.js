import React, { useState, createContext } from 'react'
import { login } from './AuthenticationService'

export const AuthenticationContext = createContext()


export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = (email, password) => {
        setIsLoading(true)
        login(email, password)
            .then((u) => {
                setUser(u)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false)
                setError(e)
            })
    }


    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                loginUser
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

