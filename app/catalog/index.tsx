import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Gaps } from '../../shared/tokens';
import Search from '../../features/search/ui/Search';
import CatalogGeo from '../../entities/geo/ui/CatalogGeo';
import { StatusBar } from 'expo-status-bar';
import TypeSelect from '../../features/type-select/ui/TypeSelect';
import ProductList from '../../widgets/product-list/ui/ProductList';

export default function Catalog() {
	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar style="light" />
			<View style={styles.header}>
				<CatalogGeo />
				<Search />
			</View>
			<View style={styles.content}>
				<TypeSelect />
				<ProductList />
			</View>
		</SafeAreaView>
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
		paddingVertical: 34,
		gap: Gaps.g28,
	},
	content: {
		backgroundColor: Colors.background,
		flex: 1,
	},
});
