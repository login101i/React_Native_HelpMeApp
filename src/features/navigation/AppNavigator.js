import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { RestaurantScreen } from "../../../src/features/restaurants/screens/RestaurantScreen";
import { SafeArea } from "../../../src/components/SafeArea";
import { RestaurantNavigation } from "./RestaurantNavigation";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings"
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		)
	};
};

function MapScreen() {
	return (
		<SafeArea>
			<Text>Hello from MapScreen</Text>;
		</SafeArea>
	);
}

function SettingsScreen() {
	return (
		<SafeArea>
			<Text>Hello from SettingsScreen</Text>;
		</SafeArea>
	);
}

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={createScreenOptions}
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "gray"
				}}
			>
				<Tab.Screen name="Restaurants" component={RestaurantNavigation} />
				<Tab.Screen name="Map" component={MapScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
