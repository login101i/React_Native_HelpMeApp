import styled from "styled-components/native";

import { FlatList, SafeAreaView, StatusBar, View } from "react-native";

export const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 33
	}
});
