import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { SafeArea } from "../../../components/SafeArea";


import {
	SearchContainer,
	RestaurantListContainer
} from "./RestaurantScreen.Styles";

import { Spacer } from "../../../components/Spacer";

export const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeAreaView>
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
				nestedScrollEnabled
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
					{ name: 7 }
				]}
				renderItem={() => <RestaurantInfoCard />}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeAreaView>
	);
};
