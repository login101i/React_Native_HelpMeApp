import React from "react";
import { Searchbar  } from "react-native-paper";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

import {
	SafeArea,
	SearchContainer,
	RestaurantListContainer,
} from "./RestaurantScreen.Styles";

export const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeArea>
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
