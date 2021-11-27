import React, { useState, useContext } from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";

import { LocationContext } from "../../services/location/LocationContext"

const SearchContainer = styled.View`
	padding: 10px;
`;

export const SearchComponent = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);

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
