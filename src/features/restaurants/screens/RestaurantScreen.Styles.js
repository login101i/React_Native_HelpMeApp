import styled from "styled-components/native";

import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
	background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantListContainer = styled.View`
	flex: 1;
	paddingtop: ${(props) => props.theme.space[2]};
	align-items: center;
`;
