import styled from "styled-components/native";
import {Button} from 'react-native-paper'
import {colors} from '../../../infrasctructure/theme/theme'

import { FlatList, SafeAreaView, StatusBar, View } from "react-native";

export const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 33
	}
});


export const OrderButton=styled(Button).attrs({
	color:colors.brand.primary
})
`
padding:${props=>props.theme.space[2]};
align-self:center;
width:80%
`