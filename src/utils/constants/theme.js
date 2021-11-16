import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
	primary: "#7F5DF0", // Light purple
	secondary: "#5D2DFD", // Dark purple

	white: "white",
	black: "#000000",
	blackSpace: "#242423",
	red2: "#961d33",
	gray: "#a3a2a2",
	darkGray: "#8f9494",
	lightGray: "#dbdbdb",
	lightGray1: "#f5f6fa",
	allegroColor: "#ff5a00",
	linkColor: "#00a790",
	backgroundColor: "#36322b",
	backgroundColorFaded: "#33302b",
	yellow: "#e8f222",
	pink: "#da50f2",
	lightBlue: "#2291f2",
	greenBlue: "#11b9bf",
	purple: "#ff7b25",
	red: "red",
	green: "green",
	lightGrey: "#f8f4f4",
	dark: "#0c0c0c",
	medium: "green",
	grey: "grey",
	fbColor: "#3b5998",
	twitterColor: "#1DA1F2",
};
export const SIZES = {
  // global sizes
  base: 8,
  medium: 11,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36, color: "white" },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30, color: "white" },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22, color: "white" },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22, color: "white" },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36, color: "white" },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30, color: "white" },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22, color: "white" },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22, color: "white" },
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 12, color: "white" },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
