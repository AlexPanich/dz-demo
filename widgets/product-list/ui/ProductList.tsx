import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import Cart from '../../../entities/Cart/ui/Cart';
import { Colors, Fonts, Gaps } from '../../../shared/tokens';
import { useAtom, useAtomValue } from 'jotai';
import { loadProductsAtom } from '../model/product-list.model';
import { useEffect } from 'react';
import { searchAtom } from '../../../features/search/model/search.model';
import { typeSelectAtom } from '../../../features/type-select/model/type-select.model';

export default function ProductList() {
	const [produtsState, loadProducts] = useAtom(loadProductsAtom);
	const search = useAtomValue(searchAtom);
	const selectedType = useAtomValue(typeSelectAtom);

	useEffect(() => {
		loadProducts();
	}, [search, selectedType]);

	return (
		<>
			{produtsState.isLoading && (
				<ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
			)}
			{produtsState.error && (
				<Text style={styles.errorMessage}>
					Упс... 😞 что то пошло не так. Попробуйте заказать кофе позже.
				</Text>
			)}
			<ScrollView contentContainerStyle={styles.inner}>
				{produtsState.products.map((coffee) => (
					<Cart key={coffee.id} {...coffee} />
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
