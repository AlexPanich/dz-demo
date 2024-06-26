import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Gaps } from '../../shared/tokens';
import Search from '../../features/search/ui/Search';
import DeliveryInfoCatalogWidget from '../../widgets/delivery-info/ui/DeliveryInfoCatalogWidget';
import { StatusBar } from 'expo-status-bar';
import TypeSelect from '../../features/type-select/ui/TypeSelect';
import ProductList from '../../widgets/product-list/ui/ProductList';

export default function Catalog() {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.wrapper, paddingTop: insets.top + 10 }}>
			<StatusBar style="light" />
			<View style={styles.header}>
				<DeliveryInfoCatalogWidget />
				<Search />
			</View>
			<View style={styles.content}>
				<TypeSelect />
				<ProductList />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.black,
	},

	header: {
		backgroundColor: Colors.black,
		paddingHorizontal: 30,
		paddingBottom: 34,
		paddingTop: 8,
		gap: Gaps.g28,
	},
	content: {
		backgroundColor: Colors.background,
		flex: 1,
	},
});
