import React, { useState, useContext, createContext, useEffect } from "react";

import { restaurantsRequest, restaurantsTransform } from "./Restaurant.Service";
import { LocationContext } from "../location/LocationContext";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);

	const retrieveRestaurants = (loc) => {
		setIsLoading(true);
		setRestaurants([]);

			restaurantsRequest(loc)
				.then(restaurantsTransform)
				.then((results) => {
					setIsLoading(false);
					setRestaurants(results);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
	
	};
	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

	return (
		<RestaurantContext.Provider
			value={{
				restaurants,
				isLoading,
				error
			}}
		>
			{children}
		</RestaurantContext.Provider>
	);
};
