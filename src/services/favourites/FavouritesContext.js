import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/AuthenticationContext';


export const FavouritesContext = createContext()


export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    const { user } = useContext(AuthenticationContext)

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const filteredFavourites = favourites.filter((res) => res.place_id !== restaurant.place_id)
        setFavourites(filteredFavourites)
    }

    const storeFavourites = async (myFavourites, uid) => {
        try {
            const jsonValue = JSON.stringify(myFavourites)
            await AsyncStorage.setItem(`@favourites + ${uid}`, jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    const getFavourites = async (uid) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`@favourites + ${uid}`)
            return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log("Error loading favourites", e)
        }
    }

    useEffect(() => {
        if (user && user.id && favourites.length)
            getFavourites(user.uid)
    }, [user])

    useEffect(() => {
        storeFavourites(favourites, user.uid)
    }, [favourites, user])





    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}
        >
            {children}

        </FavouritesContext.Provider>
    )
}

