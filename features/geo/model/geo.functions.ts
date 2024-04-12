import { LocationGeocodedAddress } from 'expo-location';

export function parseGeocodedAddressToHumanReadble(geocodedAddress: LocationGeocodedAddress) {
	const addressArray = [];
	if (geocodedAddress.region) {
		addressArray.push(geocodedAddress.region);
	}
	if (geocodedAddress.city && geocodedAddress.city !== geocodedAddress.region) {
		addressArray.push(geocodedAddress.city);
	}
	if (geocodedAddress.street) {
		addressArray.push(geocodedAddress.street);
	}
	if (geocodedAddress.streetNumber) {
		addressArray.push(geocodedAddress.streetNumber);
	}
	return addressArray.join(',');
}
