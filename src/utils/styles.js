import { Platform } from "react-native";
import { COLORS } from "./constants";

export default {
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  smallText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  COLORS,
};
