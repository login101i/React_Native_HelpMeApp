import React, { useState, useEffect, createContext } from 'react'
import { login } from './authenticationService'

export const authenticationContext = createContext()


export const authenticationContextProvider = ({ children }) => {
    const [user, setUser] = uUeState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = (email, user) => {
        setIsLoading(true)
        login(email, user)
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
        <authenticationContext value={{
            user,
            isLogin,
            error,
            loginUser
        }}>
            {children}
        </authenticationContext>
    )
}

export default authenticationContext
