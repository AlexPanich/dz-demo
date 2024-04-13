import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	Pressable,
	ActivityIndicator,
} from 'react-native';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import DeliveryInfoCartWidget from '../../../widgets/delivery-info/ui/DeliveryInfoCartWidget';
import Button from '../../../shared/Button/Button';
import { useAtomValue, useSetAtom } from 'jotai';
import {
	addToCartAtom,
	cartAtom,
	checkAtom,
	removeFromCartAtom,
} from '../../../widgets/cart/model/cart.model';
import MinusIcon from '../../../assets/icons/minus';
import PlusGrayIcon from '../../../assets/icons/plus-gray';
import { Redirect } from 'expo-router';
import { makePurchaseAtom, purchaseAtom } from '../../../features/purchase/model/puchase.model';

export default function Cart() {
	const items = useAtomValue(cartAtom);
	const addToCart = useSetAtom(addToCartAtom);
	const removeFromCart = useSetAtom(removeFromCartAtom);
	const { productsCost, deliveryCost, totalCost } = useAtomValue(checkAtom);
	const makePurchase = useSetAtom(makePurchaseAtom);
	const purchase = useAtomValue(purchaseAtom);

	const handlePressButton = () => {
		makePurchase();
	};

	if (purchase.success === true) {
		return <Redirect href="/success" />;
	}

	if (purchase.isLoading) {
		return <ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />;
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.topPanel}>
				<View style={styles.deliveryInfoWrapper}>
					<DeliveryInfoCartWidget />
				</View>
				<View style={styles.seperater} />
				<ScrollView contentContainerStyle={styles.itemList} showsVerticalScrollIndicator={false}>
					{items.map((item) => (
						<View key={`${item.product.id}+${item.size}`} style={styles.item}>
							<View style={styles.itemCard}>
								<Image source={{ uri: item.product.image }} style={styles.itemImage} />
								<View style={styles.itemDescription}>
									<Text style={styles.itemName}>{item.product.name}</Text>
									<Text style={styles.itemSubTitle}>
										{item.product.subTitle} / {item.size}
									</Text>
								</View>
							</View>
							<View style={styles.itemControls}>
								<Pressable
									style={styles.itemIcon}
									onPress={() => removeFromCart({ product: item.product, size: item.size })}
								>
									<MinusIcon />
								</Pressable>
								<Text style={styles.itemCount}>{item.count}</Text>
								<Pressable
									style={styles.itemIcon}
									onPress={() => addToCart({ product: item.product, size: item.size })}
								>
									<PlusGrayIcon />
								</Pressable>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
			<View style={styles.bottomPanel}>
				<View style={styles.total}>
					<Text style={styles.blockTitle}>Итог</Text>
					<View style={styles.checkItem}>
						<Text style={styles.checkItemName}>Цена</Text>
						<Text style={styles.checkItemValue}>{productsCost} &#8381;</Text>
					</View>
					<View style={styles.checkItem}>
						<Text style={styles.checkItemName}>Доставка</Text>
						<Text style={styles.checkItemValue}>{deliveryCost} &#8381;</Text>
					</View>
					<View style={styles.seperater} />
					<View style={styles.checkItem}>
						<Text style={styles.checkItemName}>Итого к оплате</Text>
						<Text style={styles.checkItemValue}>{totalCost} &#8381;</Text>
					</View>
				</View>
				<Button title="Заказать" onPress={handlePressButton} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.gray11,
		gap: Gaps.g4,
	},
	topPanel: {
		paddingHorizontal: 30,
		paddingTop: 20,
		backgroundColor: Colors.background,
		flex: 1,
	},
	bottomPanel: {
		paddingHorizontal: 30,
		paddingTop: 20,
		paddingBottom: 37,
		backgroundColor: Colors.background,
	},
	seperater: {
		borderColor: Colors.gray8,
		borderBottomWidth: 1,
	},
	total: {
		marginBottom: 38,
		gap: Gaps.g16,
	},
	blockTitle: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	checkItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	deliveryInfoWrapper: {
		marginBottom: 38,
	},
	checkItemName: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
	},
	checkItemValue: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
	itemList: {
		paddingVertical: 16,
		gap: Gaps.g16,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: Gaps.g12,
		alignItems: 'center',
	},
	itemImage: {
		width: 54,
		height: 54,
		resizeMode: 'cover',
		borderRadius: Radius.r12,
	},
	itemDescription: {},
	itemName: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	itemSubTitle: {
		color: Colors.gray5,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	itemControls: {
		flexDirection: 'row',
		gap: Gaps.g14,
		alignItems: 'center',
	},
	itemIcon: {
		width: 28,
		height: 28,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.gray8,
		borderRadius: Radius.r20,
	},
	itemCount: {
		color: Colors.primaryText,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
	activity: {
		marginTop: 24,
	},
});
