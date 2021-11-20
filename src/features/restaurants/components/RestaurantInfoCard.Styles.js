import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
	width: 25px;
	height: 25px;
	margin: ${(props) => props.theme.space[1]};
`;

export const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardContent = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Description = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
`;

export const Image = styled.Image``;

export const Section = styled.View`
	flex-direction: row;
`;

export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

