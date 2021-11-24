import React from "react";
import { Text, View } from "react-native";

export const RestaurantDetailsScreen = ({ route }) => {
	const { restaurant } = route.params;
	return (
		<View>
			<Text>{restaurant.address}</Text>
		</View>
	);
};

export default RestaurantDetailsScreen;
