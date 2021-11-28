import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import * as firebase from 'firebase'

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrasctructure/theme";


import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";


import { Navigation } from './src/features/navigation'


import {
	useFonts as useOswald,
	Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
	const [isAuthenticaded, setIsAuthenticaded] = useState(true)


	// useEffect(() => {
	// 	setTimeout(() => {
	// 		firebase.auth()
	// 			.signInWithEmailAndPassword("mk@wp.pl, 123456")
	// 			.then((user) => {
	// 				setIsAuthenticaded(true)
	// 			})
	// 			.catch((e) => {
	// 				console.log(e)
	// 			})
	// 	}, 4000)

	// }, [])

	let initializeApp

	const firebaseConfig = {
		apiKey: "AIzaSyAUCCcmui6TkzDup6fv6uJkUY3xAY3W-Bo",
		authDomain: "helpmeapp-205c4.firebaseapp.com",
		projectId: "helpmeapp-205c4",
		storageBucket: "helpmeapp-205c4.appspot.com",
		messagingSenderId: "974486216033",
		appId: "1:974486216033:web:e2050af62e5f63d7173920"
	};

	// if (!firebase.apps.length) {
	// 	firebase.initializeApp(firebaseConfig);
	// }

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	});

	const [latoLoaded] = useLato({
		Lato_400Regular
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	if (!isAuthenticaded) return null

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
