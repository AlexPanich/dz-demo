import { StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from '../../../assets/icons/search';
import { Colors, Fonts, Radius } from '../../../shared/tokens';
import { searchAtom } from '../model/search.model';
import { useAtom } from 'jotai';

export default function Search() {
	const [search, setSearch] = useAtom(searchAtom);

	return (
		<View style={styles.wrapper}>
			<TextInput
				style={styles.field}
				placeholder="Найти кофе"
				placeholderTextColor={Colors.secondayText}
				value={search}
				onChangeText={setSearch}
			/>
			<View style={styles.searchIcon}>
				<SearchIcon />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {},
	searchIcon: {
		position: 'absolute',
		top: 16,
		left: 16,
	},
	field: {
		backgroundColor: Colors.darGray,
		height: 52,
		borderRadius: Radius.r16,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
		color: Colors.white,
		paddingLeft: 48,
		paddingRight: 24,
	},
});
