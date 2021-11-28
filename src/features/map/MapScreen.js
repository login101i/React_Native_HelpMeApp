import React, { useEffect } from "react";
import MapView from "react-native-maps";
import styled from 'styled-components/native'
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LocationContext } from '../../services/location/LocationContext'
import { RestaurantContext } from '../../services/Restaurant/RestaurantContext'
import { MapCallout } from "./MapCallout";


const Map = styled(MapView)`
height:100%;
width:100%;
`

export function MapScreen({navigation}) {

	const [latDelta, setLatDelta] = useState(0);

	const { location, lng, lat } = useContext(LocationContext)
	const { restaurants = [] } = useContext(RestaurantContext)
	const [viewport] = location




	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;

		setLatDelta(northeastLat - southwestLat);



	}, [location, viewport])


	return (
		<View style={styles.container}>
			<Map style={styles.map}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
					// default zoom
				}}
			>
				{restaurants.map((restaurant) => {
					<MapView.Marker
						key={restaurant.name}
						coordinate={{
							latitude: restaurant.geometry.location.lat,
							longitude: restaurant.geometry.location.lng
						}}
						title={restaurant.name}
					>
						<MapCallout restaurant={restaurant} onPress={()=>navigation.navigate("RestaurantDetails", {restaurant})}/>
					</MapView.Marker>
				})}


			</Map>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
});
