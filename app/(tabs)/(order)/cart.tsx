import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../shared/tokens';
import CartGeo from '../../../entities/geo/ui/CartGeo';

export default function Order() {
	return (
		<View style={styles.wrapper}>
			<CartGeo />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: 30,
		paddingBottom: 37,
	},
});
