import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/SafeArea";
import { RestaurantContext } from "../../../services/Restaurant/RestaurantContext";
import { ActivityIndicator } from "react-native-paper";

import { Spacer } from "../../../components/Spacer";
import { RestaurantSearch } from "../components/RestaurantSearch";
import { FavouritesBar } from "../../../components/FavouritesBar"
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { AnimatedView } from '../../../components/AnimatedView'

const IndicatorContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`

const Indicator = styled(ActivityIndicator)`
	margin-left: -27px;
	color: purple;
`;

export const RestaurantScreen = ({ navigation }) => {
	const [showFavourites, setShowFavourites] = useState(false)
	const { restaurants, isLoading } = useContext(RestaurantContext);

	const { favourites } = useContext(FavouritesContext)

	return (
		<SafeArea>
			{isLoading ? (
				<IndicatorContainer>
					<Indicator size={55} animating={true} />
				</IndicatorContainer>
			) : (
				<>
					<Spacer position="top" size="large">
						<RestaurantSearch
							favouritesVisible={showFavourites}
							onFavouritesToggle={() => setShowFavourites(!showFavourites)}
						/>
					</Spacer>

					{showFavourites && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
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
									<AnimatedView>
										<RestaurantInfoCard restaurant={item} />
									</AnimatedView>

								</TouchableOpacity>
							)
						}}
						keyExtractor={(item) => item.name}
						contentContainerStyle={{ padding: 16 }}
					/>
				</>
			)}
		</SafeArea>
	);
};
