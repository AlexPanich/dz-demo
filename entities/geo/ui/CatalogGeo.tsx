import { View, Text, StyleSheet } from 'react-native';
import EditIcon from '../../../assets/icons/edit';
import { Link } from 'expo-router';
import { Colors, Fonts } from '../../../shared/tokens';

export default function CatalogGeo() {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>Адресс</Text>
			<Text style={styles.adress}>
				Москва, Новослободская 23{' '}
				<Link href="/(tabs)/(order)/adress">
					<EditIcon />
				</Link>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'flex-start',
		gap: 4,
	},
	label: {
		color: Colors.gray2,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	adress: {
		color: Colors.gray3,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
});
