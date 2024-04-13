import { Stack } from 'expo-router';

export default function OrderLayout() {
	return (
		<Stack>
			<Stack.Screen name="cart" />
			<Stack.Screen name="adress" />
			<Stack.Screen name="success" />
		</Stack>
	);
}
