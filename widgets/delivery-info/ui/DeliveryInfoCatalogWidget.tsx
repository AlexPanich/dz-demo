import { View, Text, StyleSheet } from 'react-native';
import EditIcon from '../../../assets/icons/edit';
import { Link } from 'expo-router';
import { Colors, Fonts, Gaps } from '../../../shared/tokens';
import { useAtomValue } from 'jotai';
import { deliveryInfoAtom } from '../model/delivery-info.model';

export default function DeliveryInfoCatalogWidget() {
	const { geo } = useAtomValue(deliveryInfoAtom);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>Адресс</Text>
			<Text style={styles.address}>
				{geo ?? 'Не задан'}{' '}
				<Link href="/(tabs)/address">
					<EditIcon />
				</Link>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'flex-start',
		gap: Gaps.g4,
	},
	label: {
		color: Colors.gray2,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	address: {
		color: Colors.gray3,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
});
