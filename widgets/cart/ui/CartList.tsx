import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import {
	addToCartAtom,
	cartAtom,
	removeFromCartAtom,
} from '../../../widgets/cart/model/cart.model';
import MinusIcon from '../../../assets/icons/minus';
import PlusGrayIcon from '../../../assets/icons/plus-gray';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';

export default function CartList() {
	const items = useAtomValue(cartAtom);
	const addToCart = useSetAtom(addToCartAtom);
	const removeFromCart = useSetAtom(removeFromCartAtom);

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContainer}
			showsVerticalScrollIndicator={false}
		>
			{items.map((item) => (
				<View key={`${item.product.id}+${item.size}`} style={styles.item}>
					<View style={styles.card}>
						<Image source={{ uri: item.product.image }} style={styles.image} />
						<View style={styles.description}>
							<Text style={styles.name}>{item.product.name}</Text>
							<Text style={styles.subTitle}>
								{item.product.subTitle} / {item.size}
							</Text>
						</View>
					</View>
					<View style={styles.controls}>
						<Pressable
							style={styles.icon}
							onPress={() => removeFromCart({ product: item.product, size: item.size })}
						>
							<MinusIcon />
						</Pressable>
						<Text style={styles.count}>{item.count}</Text>
						<Pressable
							style={styles.icon}
							onPress={() => addToCart({ product: item.product, size: item.size })}
						>
							<PlusGrayIcon />
						</Pressable>
					</View>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollViewContainer: {
		paddingVertical: 16,
		gap: Gaps.g16,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: Gaps.g12,
		alignItems: 'center',
	},
	image: {
		width: 54,
		height: 54,
		resizeMode: 'cover',
		borderRadius: Radius.r12,
	},
	description: {},
	name: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	subTitle: {
		color: Colors.gray5,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	controls: {
		flexDirection: 'row',
		gap: Gaps.g14,
		alignItems: 'center',
	},
	icon: {
		width: 28,
		height: 28,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.gray8,
		borderRadius: Radius.r20,
	},
	count: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
});
