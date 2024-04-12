import { View, StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../../shared/tokens';
import EditDeliveryInfoForm from '../../../widgets/delivery-info/ui/EditDeliveryInfoForm';

export default function Address() {
	return (
		<View style={styles.wrapper}>
			<EditDeliveryInfoForm />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: 30,
		paddingBottom: 37,
		gap: Gaps.g40,
	},
});
