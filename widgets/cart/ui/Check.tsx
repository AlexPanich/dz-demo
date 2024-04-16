import { StyleSheet, Text, View } from 'react-native';
import { checkAtom } from '../model/cart.model';
import { useAtomValue } from 'jotai';
import { Colors, Fonts, Gaps } from '../../../shared/tokens';
import Separator from '../../../shared/Separator/Separator';

export default function Check() {
	const { productsCost, deliveryCost, totalCost } = useAtomValue(checkAtom);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Итог</Text>
			<View style={styles.item}>
				<Text style={styles.name}>Цена</Text>
				<Text style={styles.value}>{productsCost} &#8381;</Text>
			</View>
			<View style={styles.item}>
				<Text style={styles.name}>Доставка</Text>
				<Text style={styles.value}>{deliveryCost} &#8381;</Text>
			</View>
			<Separator />
			<View style={styles.item}>
				<Text style={styles.name}>Итого к оплате</Text>
				<Text style={styles.value}>{totalCost} &#8381;</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 38,
		gap: Gaps.g16,
	},
	title: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
	},
	value: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
});
