import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { SafeArea } from "../../../components/SafeArea";
import { RestaurantContext } from "../../../services/Restaurant/Restaurant.Context";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
	SearchContainer,
	RestaurantListContainer
} from "./RestaurantScreen.Styles";

import { Spacer } from "../../../components/Spacer";

const IndicatorContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Indicator = styled(ActivityIndicator)`
	margin-left: -27px;
	color: purple;
`;

export const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const onChangeSearch = (query) => setSearchQuery(query);

	const { restaurants, isLoading, error } = useContext(RestaurantContext);

	return (
		<SafeArea>
			{isLoading ? (
				<IndicatorContainer>
					<Indicator size={55} animating={true} />
				</IndicatorContainer>
			) : (
				<>
					<Spacer position="top" size="large">
						<SearchContainer>
							<Searchbar
								placeholder="Search"
								onChangeText={onChangeSearch}
								value={searchQuery}
							/>
						</SearchContainer>
					</Spacer>
					<FlatList
						data={restaurants}
						renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
						keyExtractor={(item) => item.name}
						contentContainerStyle={{ padding: 16 }}
					/>
				</>
			)}
		</SafeArea>
	);
};
