import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import GeoIcon from '../../../assets/icons/geo';
import * as Location from 'expo-location';
import { Colors, Radius } from '../../../shared/tokens';
import { GeoProps } from '../model/geo.types';
import { parseGeocodedAddressToHumanReadble } from '../model/geo.functions';

export default function Geo({ onGetGeo }: GeoProps) {
	const getLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			return;
		}

		const location = await Location.getCurrentPositionAsync();
		if (!location) {
			return;
		}

		const [geocodedAddress] = await Location.reverseGeocodeAsync({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});

		const geo = parseGeocodedAddressToHumanReadble(geocodedAddress);
		onGetGeo(geo);
	};

	return (
		<Pressable style={styles.wrapper} onPress={getLocation}>
			<GeoIcon />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: Colors.primary,
		width: 34,
		height: 34,
		borderRadius: Radius.r10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
