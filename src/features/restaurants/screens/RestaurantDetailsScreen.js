import React, { useState, useContext } from "react";

import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/SafeArea";
import {OrderButton} from "../../../features/restaurants/screens/RestaurantScreen.Styles"
import { Spacer } from "../../../components/Spacer";
import { CartContext } from "../../../services/cart/cartContext";
import { NavigationContainer } from "@react-navigation/native";

export const RestaurantDetailsScreen = ({ route }) => {
	const { restaurant } = route.params;
	const [expanded, setExpanded] = useState(false);
	const handlePress = () => setExpanded(!expanded);

	const {addToCart} =useContext(CartContext)

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

				<Spacer position="bottom" size="large">
					<OrderButton mode="contained" icon="cash-usd" onPress={()=>{
						addToCart({item:"special", price:1234, restaurant})
						navigation.navigate("Checkout")
					}}>
						Order special only 
					</OrderButton>
				</Spacer>
			</ScrollView>
		</SafeArea>
	);
}