import { Stack, useRouter } from 'expo-router';
import BackIcon from '../../../assets/icons/back';
import { Colors, Fonts } from '../../../shared/tokens';
import { Pressable } from 'react-native';

export default function OrderLayout() {
	const router = useRouter();

	return (
		<Stack
			screenOptions={{
				headerLeft: () => (
					<Pressable onPress={() => router.back()}>
						<BackIcon />
					</Pressable>
				),
				headerTitleAlign: 'center',
				headerTitleStyle: {
					fontFamily: Fonts.semibold,
					fontSize: Fonts.f18,
					color: Colors.primaryText,
				},
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name="cart"
				options={{
					headerTitle: 'Заказ',
				}}
			/>
			<Stack.Screen
				name="address"
				options={{
					headerTitle: 'Изменить адрес',
				}}
			/>
			<Stack.Screen
				name="success"
				options={{
					headerTitle: 'Заказ оформлен',
				}}
			/>
		</Stack>
	);
}
