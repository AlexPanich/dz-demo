import { Image, View, StyleSheet } from 'react-native';
import Button from '../../../shared/Button/Button';
import { Redirect } from 'expo-router';
import { Colors } from '../../../shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { clearPurchaseAtom, purchaseAtom } from '../../../features/purchase/model/puchase.model';
import * as Notifications from 'expo-notifications';

export default function Success() {
	const clearPurchase = useSetAtom(clearPurchaseAtom);
	const purchase = useAtomValue(purchaseAtom);

	const allowsNotification = async () => {
		const settings = await Notifications.getPermissionsAsync();
		return (
			settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
		);
	};

	const requestPermissions = () => {
		return Notifications.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true,
			},
		});
	};

	const scheduleNotification = async () => {
		const granted = await allowsNotification();
		if (!granted) {
			await requestPermissions();
		}
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Ваш кофе доставлен!',
				body: 'Приятного аппетита!',
			},
			trigger: {
				seconds: 10,
			},
		});
	};

	const handlePress = async () => {
		await scheduleNotification();
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
