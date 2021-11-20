import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./Restaurant.Service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const retrieveRestaurants = () => {
		setTimeout(() => {
			setIsLoading(true);
			restaurantsRequest()
				.then(restaurantsTransform)
				.then((result) => {
					setIsLoading(false);
					setRestaurants(result);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(error);
				});
		}, 3000);
	};

	useEffect(() => {
		retrieveRestaurants();
	}, []);

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
