/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";

// import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import { Spacer } from "../../../components/Spacer";
import {
	Icon,
	RestaurantCard,
	CardCover,
	CardContent,
	Section,
	SectionEnd
} from "./RestaurantInfoCard.Styles";

export const RestaurantInfoCard = ({ restaurant = [] }) => {
	const {
		name = "Some Restaurant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
		],
		address = "Wrocław ul. Chopina 18",
		isOpenNow = true,
		rating = 5,
		isClosedTemporarily = true,
		description = "Super restauracja",
		place_id
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.ceil(rating)));
	const star =
		"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png";

	return (
		<RestaurantCard>
			<CardCover key={name} source={{ uri: photos[0] }} />
			<CardContent>
				<Text variant="label">{name}</Text>

				<Section>
					{ratingArray.map((_, i) => (
						<Icon source={{ uri: star }} key={`${place_id}+ ${i}`} />
					))}
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">Closed temporarily </Text>
						)}
						<Spacer position="left" size="large">
							<Icon source={{ uri: icon }} />
						</Spacer>
						{isOpenNow && <Icon source={{ uri: icon }} />}
					</SectionEnd>
				</Section>
				<Text variant="body">{address}</Text>
			</CardContent>
		</RestaurantCard>
	);
};
