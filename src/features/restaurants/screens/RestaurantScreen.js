import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/SafeArea";
import { RestaurantContext } from "../../../services/Restaurant/Restaurant.Context";
import { ActivityIndicator } from "react-native-paper";

import { Spacer } from "../../../components/Spacer";
import { RestaurantSearch } from "../components/RestaurantSearch";

const IndicatorContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Indicator = styled(ActivityIndicator)`
	margin-left: -27px;
	color: purple;
`;

export const RestaurantScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantContext);

	return (
		<SafeArea>
			{isLoading ? (
				<IndicatorContainer>
					<Indicator size={55} animating={true} />
				</IndicatorContainer>
			) : (
				<>
					<Spacer position="top" size="large">
						<RestaurantSearch />
					</Spacer>
					<FlatList
						data={restaurants}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("RestaurantDetails", {
											restaurant: item
										})
									}
								>
									<RestaurantInfoCard restaurant={item} />;
								</TouchableOpacity>
							);
						}}
						keyExtractor={(item) => item.name}
						contentContainerStyle={{ padding: 16 }}
					/>
				</>
			)}
		</SafeArea>
	);
};
