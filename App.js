import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrasctructure/theme";
import { RestaurantContextProvider } from "./src/services/Restaurant/Restaurant.Context";
import { LocationContextProvider } from "./src/services/location/LocationContext";

import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
	useFonts as useOswald,
	Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { SafeArea } from "./src/components/SafeArea";

const Tab = createBottomTabNavigator();

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

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	});

	const [latoLoaded] = useLato({
		Lato_400Regular
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantContextProvider>
						<NavigationContainer>
							<Tab.Navigator
								screenOptions={createScreenOptions}
								tabBarOptions={{
									activeTintColor: "tomato",
									inactiveTintColor: "gray"
								}}
							>
								<Tab.Screen name="Restaurants" component={RestaurantScreen} />
								<Tab.Screen name="Map" component={MapScreen} />
								<Tab.Screen name="Settings" component={SettingsScreen} />
							</Tab.Navigator>
						</NavigationContainer>

						<ExpoStatusBar style="auto" />
					</RestaurantContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
		</>
	);
}

const styles = StyleSheet.create({});
