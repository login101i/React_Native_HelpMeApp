import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrasctructure/theme";

import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
} from "react-native";

import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<Text style={{ backgroundColor: "green" }}>Hello</Text>
				<RestaurantScreen />
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}

const styles = StyleSheet.create({});
