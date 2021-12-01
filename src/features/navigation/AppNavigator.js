import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";

import { SafeArea } from "../../../src/components/SafeArea";
import { RestaurantNavigation } from "./RestaurantNavigation";

import { MapScreen } from "../../features/map/MapScreen";

import { LocationContextProvider } from "../../services/location/LocationContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";
import { RestaurantContextProvider } from "../../services/Restaurant/RestaurantContext";
import { CartContextProvider } from "../../services/cart/cartContext";

import { SettingsNavigator } from "../../features/navigation/SettingsNavigator";
import { CheckoutNavigator } from "../../features/navigation/CheckoutNavigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    )
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <CartContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantNavigation} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
