import React from 'react'
import styled from "styled-components/native";
import {CompactRestaurantInfo} from '../../../src/features/restaurants/components/CompactRestaurantInfo'

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo restaurant={restaurant}/>
);