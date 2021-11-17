/* eslint-disable prettier/prettier */
import React from "react";

// import { SvgXml } from "react-native-svg";


import star from "../../../assets/star";
// import open from "../../../assets/open"
import {Spacer} from '../../../components/Spacer'
import { RestaurantCard,CardCover, CardContent, Title, Description, Rating,Section, SectionEnd } from "./RestaurantInfoCard.Styles";


export const RestaurantInfoCard = ({ restaurant = [] }) => {
	const {
		name = "Some Restaurant",
		icon,
		photos = [
			"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
		],
		address = "Wrocław ul. Chopina 18",
		isOpenNow = false,
		rating = 5,
		isClosedTemporarily,
		description = "Super restauracja",
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.ceil(rating)));
	return (
		<RestaurantCard>
			<CardCover source={{ uri: photos[0] }} />
			<CardContent>
				<Title>{name}</Title>
				<Spacer/>
				<Section>
					{ratingArray.map(() => {
						<Rating>
							{/* <SvgXml xml={star} width={20} height={20} /> */}
							<Text>Svg Element</Text>
						</Rating>;
					})}
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="label" style={{ color: "red" }}>
								Closed temporarily{" "}
							</Text>
						)}
						<Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
						{isOpenNow && <SvgXml xml={star} width={20} height={20} />}
					</SectionEnd>
				</Section>
				<Description>{description}</Description>
			</CardContent>
		</RestaurantCard>
	);
};
