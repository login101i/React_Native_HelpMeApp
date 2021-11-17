import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
	width: 95%;
`;

export const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${props=>props.theme.colors.backgrounColor};
`;

export const Rating = styled.View`
	display: flex;
	flex-direction: row;
`;

export const CardContent = styled(Card.Content)`
	padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled.View`
fontSize:${(props) => props.theme.fontSizes.title},
font-family:${(props) => props.theme.fonts.body}
`;

export const Description = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
`;

export const Section = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SectionEnd = styled.View``;
