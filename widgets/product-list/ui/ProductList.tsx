import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import Card from '../../../entities/Card/ui/Card';
import { Colors, Fonts, Gaps } from '../../../shared/tokens';
import { useProducts } from '../model/product-list.hooks';

export default function ProductList() {
	const { products, isLoading, error } = useProducts();

	return (
		<>
			{isLoading && (
				<ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
			)}
			{error && (
				<Text style={styles.errorMessage}>
					Упс... 😞 что то пошло не так. Попробуйте заказать кофе позже.
				</Text>
			)}
			<ScrollView contentContainerStyle={styles.inner}>
				{products.map((coffee) => (
					<Card key={coffee.id} {...coffee} />
				))}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	inner: {
		paddingHorizontal: 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: Gaps.g8,
	},
	activity: {
		marginTop: 24,
	},
	errorMessage: {
		color: Colors.gray,
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		textAlign: 'center',
		paddingHorizontal: 30,
	},
});
