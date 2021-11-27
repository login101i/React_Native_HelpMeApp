import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Settings, Text } from "react-native";

import { SafeArea } from "../../../src/components/SafeArea";
import { RestaurantNavigation } from "./RestaurantNavigation";

import { MapScreen } from "../../features/map/MapScreen";
import { SearchComponent } from "../map/SearchComponent";

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

// function SettingsScreen() {
// 	return (
// 		<SafeArea>
// 			<SearchComponent />
// 			<Text>Hello from SettingsScreen</Text>;
// 		</SafeArea>
// 	);
// }

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
				{/* <Tab.Screen name="Map" component={MapScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} /> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
};
