/* eslint-disable prettier/prettier */
import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import styled from "styled-components/native";


import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import {COLORS} from "../../../utils/constants";


const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px` };
	background-color:${COLORS.backgroundColor} ;
`;

const SearchContainer = styled.View`
	padding: 16px;
`;

const RestaurantListContainer = styled.View`
flex:1;
paddingTop:16px;
	align-items:center;
`;

export const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeArea >
			<SearchContainer>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchContainer>
			<RestaurantListContainer>
				<RestaurantInfoCard />
			</RestaurantListContainer>
		</SafeArea>
	);
};


