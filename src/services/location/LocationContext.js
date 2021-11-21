import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./Location.Service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("san francisco");
	const [location, setLocation] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const onSearch = (searchWord = "san francisco") => {
		setKeyword(searchWord);
		console.log(searchWord);
		setIsLoading(true);
		if (!searchWord.length) {
			return;
		}

		locationRequest(searchWord.toLowerCase())
			.then(locationTransform)
			.then((result) => {
				setLocation(result);
				setIsLoading(false);
				console.log(result);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});
	};

	useEffect(() => {
		onSearch();
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{
				location,
				isLoading,
				error,
				search: onSearch,
				keyword
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
