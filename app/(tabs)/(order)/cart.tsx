import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colors, Gaps } from '../../../shared/tokens';
import DeliveryInfoCartWidget from '../../../widgets/delivery-info/ui/DeliveryInfoCartWidget';
import Button from '../../../shared/Button/Button';
import { useAtomValue, useSetAtom } from 'jotai';
import { Redirect } from 'expo-router';
import { makePurchaseAtom, purchaseAtom } from '../../../features/purchase/model/puchase.model';
import Check from '../../../widgets/cart/ui/Check';
import CartList from '../../../widgets/cart/ui/CartList';
import Separator from '../../../shared/Separator/Separator';

export default function Cart() {
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
				<Separator />
				<CartList />
			</View>
			<View style={styles.bottomPanel}>
				<Check />
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
	deliveryInfoWrapper: {
		marginBottom: 38,
	},
	activity: {
		marginTop: 24,
	},
});
