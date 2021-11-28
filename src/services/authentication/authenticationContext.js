import React, { useState, createContext } from 'react'
// import * as firebase from 'firebase'


import { login, register } from './AuthenticationService'

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
    const registerUser = (email, password, repeatedPassword) => {

        if (password !== repeatedPassword) {
            return setError("Error: Passwords do not match")
        }
        setIsLoading(true)

        register(email, password, repeatedPassword)
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

    const logoutUser = () => {
        setUser(null)
        // firebase.auth().signOut()
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user: !!user,
                isLoading,
                error,
                loginUser,
                registerUser,
                logoutUser
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

