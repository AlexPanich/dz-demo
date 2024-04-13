import { Image, View, StyleSheet } from 'react-native';
import Button from '../../../shared/Button/Button';
import { Redirect } from 'expo-router';
import { Colors } from '../../../shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { clearPurchaseAtom, purchaseAtom } from '../../../features/purchase/model/puchase.model';

export default function Success() {
	const clearPurchase = useSetAtom(clearPurchaseAtom);
	const purchase = useAtomValue(purchaseAtom);

	const handlePress = () => {
		clearPurchase();
	};

	if (purchase.success === null) {
		return <Redirect href="/catalog" />;
	}

	return (
		<View style={styles.wrapper}>
			<Image source={require('../../../assets/images/coffee.png')} style={styles.image} />
			<Button title="На главную" onPress={handlePress} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: 'space-between',
		padding: 30,
		paddingBottom: 37,
	},
	image: {
		marginTop: 140,
		width: 214,
		height: 214,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
});
