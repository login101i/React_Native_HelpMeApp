import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

import { Spacer } from '../../src/components/Spacer'
import CompactRestaurantInfo from '../features/restaurants/components/CompactRestaurantInfo'


const FavouritesWrapper = styled.View`
padding:10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {


    if (!favourites.length) {
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer position="left" size="medium">
                <Text>Your favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => (

                    <Spacer key={restaurant.name} position="left" size="medium">
                        <TouchableOpacity onPress={() => onNavigate("RestaurantDetails", { restaurant })}>
                            <CompactRestaurantInfo restaurant={restaurant} />
                        </TouchableOpacity>
                    </Spacer>

                ))}
            </ScrollView>

        </FavouritesWrapper>
    )

}

