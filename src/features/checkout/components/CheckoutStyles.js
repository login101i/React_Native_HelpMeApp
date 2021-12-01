import styled from "styled-components/native";
import {Avatar} from 'react-native-paper'

import { View} from "react-native";

export const CartIconContainer=styled.View`
padding:${props=>props.theme.space[2]}
align-items:center;
justify-content:center;
flex:1
`

export const CartIcon=styled(Avatar.Icon).attrs({
    size:124,
})`
padding:${props=>props.theme.space[2]};
background-color:${props=>props.bg || props.theme.colors.brand.primary}
`