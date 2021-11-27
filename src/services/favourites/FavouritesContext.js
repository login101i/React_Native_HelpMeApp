import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavouritesContext = createContext()





export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])
    console.log(favourites)

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const filteredFavourites = favourites.filter((res) => res.place_id !== restaurant.place_id)
        setFavourites(filteredFavourites)
    }

    const storeFavourites = async (myFavourites) => {
        try {
            const jsonValue = JSON.stringify(myFavourites)
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    const getFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites')
            return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log("Error loading favourites", e)
        }
    }
    
    useEffect(()=>{
        getFavourites()
    },[])

    useEffect(()=>{
        storeFavourites(favourites)
    },[favourites])





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

