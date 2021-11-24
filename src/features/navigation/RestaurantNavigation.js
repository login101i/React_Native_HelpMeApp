import React from "react";
import {
	createStackNavigator,
	TransitionPresets
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../../src/features/restaurants/screens/RestaurantScreen";
import { RestaurantDetailsScreen } from "../../../src/features/restaurants/screens/RestaurantDetailsScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigation = () => {
	return (
		<RestaurantStack.Navigator
			headerMode="none"
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
		>
			<RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
			<RestaurantStack.Screen
				name="RestaurantDetails"
				component={RestaurantDetailsScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
