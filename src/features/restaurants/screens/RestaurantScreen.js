import React, {useContext} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { SafeArea } from "../../../components/SafeArea";
import {RestaurantContext} from '../../../services/Restaurant/Restaurant.Context'


import {
	SearchContainer,
	RestaurantListContainer
} from "./RestaurantScreen.Styles";

import { Spacer } from "../../../components/Spacer";

export const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const onChangeSearch = (query) => setSearchQuery(query);

  const restaurantsContext = useContext(RestaurantContext);
  console.log(restaurantsContext.restaurants);

	return (
		<SafeArea>
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
				data={restaurantsContext.restaurants}
				renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
};
