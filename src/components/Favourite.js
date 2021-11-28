import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import { FavouritesContext } from '../services/favourites/FavouritesContext'


const FavouriteButton = styled(TouchableOpacity)`
position:absolute;
top:20px;
right:20px;
z-index:9;
`



export const Favourite = ({ restaurant }) => {
    const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouritesContext)

    const isFavourite = favourites.find((res) => res.place_id === restaurant.place_id)
    return (
        <FavouriteButton
            onPress={() =>
                !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
            }
        >
            <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={24}
                color={isFavourite ? "purple" : "white"}
            />

        </FavouriteButton>
    )
}

