import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrasctructure/theme";
import { RestaurantContextProvider } from "./src/services/Restaurant/Restaurant.Context";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { AppNavigator } from "./src/features/navigation/AppNavigator";
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";

import {
	useFonts as useOswald,
	Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantContextProvider>
							<AppNavigator />
						</RestaurantContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
