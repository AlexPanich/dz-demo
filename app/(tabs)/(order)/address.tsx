import { View, StyleSheet } from 'react-native';
import { Colors } from '../../../shared/tokens';
import AddressGeo from '../../../entities/geo/ui/AddressGeo';

export default function Address() {
	return (
		<View style={styles.wrapper}>
			<AddressGeo />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.white,
		padding: 30,
		paddingBottom: 37,
		gap: 40,
	},
});
