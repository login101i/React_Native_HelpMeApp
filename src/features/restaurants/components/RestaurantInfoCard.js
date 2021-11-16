/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { Card, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
	width:95%;
`;

const CardCover = styled(Card.Cover)`
	padding: 20px;
	background-color: white;
`;

const CardContent = styled(Card.Content)`
	padding: 2px;
`;

const Title = styled.View`
fontSize:33,
`;

const Description = styled.Text``;

export const RestaurantInfoCard = ({ restaurant = [] }) => {
	const {
		name = "Some Restaurant",
		icon,
		photos = [
			"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
		],
		address = "Wrocław ul. Chopina 18",
		isOpenNow = true,
		rating = 5,
		isClosedTemporarily,
		description = "Super restauracja",
	} = restaurant;
	return (
		<RestaurantCard>
			<CardCover source={{ uri: photos[0] }} />
			<CardContent>
				<Title>{name}</Title>
				<Description> {description}</Description>
			</CardContent>
		</RestaurantCard>
	);
};
