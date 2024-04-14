import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../shared/tokens';
import DeliveryInfoCartWidget from '../../../widgets/delivery-info/ui/DeliveryInfoCartWidget';

export default function Order() {
	return (
		<View style={styles.wrapper}>
			<DeliveryInfoCartWidget />
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
