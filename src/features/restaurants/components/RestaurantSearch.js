import React, { useState, useContext } from "react";

import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/LocationContext";

import { SearchContainer } from "../screens/RestaurantScreen.Styles";

export const RestaurantSearch = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	return (
		<SearchContainer>
			<Searchbar
				placeholder="Search for location"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};
