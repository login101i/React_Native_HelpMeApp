import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'


import { FavouritesContext } from '../../../services/favourites/FavouritesContext'
import { SafeArea } from '../../../components/SafeArea'
import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';
import { Text } from '../../../components/Text'


const NoFavouritesContainer = styled.View`
flex:1;
align-items:center;
justify-content:center
`



export const FavouritesScreen = ({navigation}) => {

    const { favourites } = useContext(FavouritesContext)

    return (
        <SafeArea>
            {favourites.length ?
                <FlatList
                    data={favourites}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("RestaurantDetails", {
                                        restaurant: item
                                    })
                                }
                            >
                                <RestaurantInfoCard restaurant={item} />;
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ padding: 16 }}
                />
                :
                <NoFavouritesContainer>
                    <Text variant="caption">You don't have any favourites yet.</Text>
                </NoFavouritesContainer>
            }
        </SafeArea>
    )
}

