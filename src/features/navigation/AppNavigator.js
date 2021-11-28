import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native'

import { SafeArea } from "../../../src/components/SafeArea";
import { RestaurantNavigation } from "./RestaurantNavigation";

import { MapScreen } from "../../features/map/MapScreen";
import { SearchComponent } from "../map/SearchComponent";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext'
import { LocationContextProvider } from "../../services/location/LocationContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";
import { RestaurantContextProvider } from "../../services/Restaurant/RestaurantContext";

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

function SettingsScreen({ navigation }) {
	const { logoutUser } = useContext(AuthenticationContext)
	return (
		<SafeArea>
			<SearchComponent />
			<Button title="Logout"
				onPress={() => {
					logoutUser()
					navigation.navigate()
				}} />;
		</SafeArea>
	);
}

export const AppNavigator = () => {
	return (
		<FavouritesContextProvider>
			<LocationContextProvider>
				<RestaurantContextProvider>


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

				</RestaurantContextProvider >
			</LocationContextProvider>
		</FavouritesContextProvider>

	);
};
