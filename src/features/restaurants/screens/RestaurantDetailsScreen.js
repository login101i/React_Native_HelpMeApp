import React, { useState } from "react";

import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/SafeArea";
import Favourite from '../../../components/Favourite'

export const RestaurantDetailsScreen = ({ route }) => {
	const { restaurant } = route.params;
	const [expanded, setExpanded] = useState(false);
	const handlePress = () => setExpanded(!expanded);

	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<List.Accordion
					title="Breakfast"
					left={(props) => <List.Icon {...props} icon="bread-slice" />}
				>
					<List.Item title="First item" />
					<List.Item title="Second item" />
				</List.Accordion>
				<List.Accordion
					title="Dinners"
					left={(props) => (
						<List.Icon {...props} icon="silverware-fork-knife" />
					)}
					expanded={expanded}
					onPress={handlePress}
				>
					<List.Item title="First item" />
					<List.Item title="Second item" />
					<List.Item title="First item" />
					<List.Item title="Second item" />
					<List.Item title="First item" />
					<List.Item title="Second item" />
				</List.Accordion>
				<List.Accordion
					title="Lunches"
					left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
					expanded={expanded}
					onPress={handlePress}
				>
					<List.Item title="First item" />

					<List.Item title="First item" />
					<List.Item title="Second item" />
				</List.Accordion>
			</ScrollView>
		</SafeArea>
	);
}