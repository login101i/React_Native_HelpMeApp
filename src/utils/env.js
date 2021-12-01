import { Platform } from "react-native";

const localHost = "http://localhost:5001/mealstogoservers/us-central1";
const liveHost = "https://us-central1-mealstogoservers.cloudfunctions.net";

export const isMock=true
export const isAndroid = Platform.OS === "android";

export const isDevelopment=process.env.NODE.ENV==="develpment"

export const host=!isDevelopment || isAndroid ? liveHost:localHost