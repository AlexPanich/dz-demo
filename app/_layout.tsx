import { useEffect } from 'react';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import BackIcon from '../assets/icons/back';
import { Colors, Fonts } from '../shared/tokens';
import { Notification } from '../shared/Notification/Notification';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const router = useRouter();

	const [fontsLoaded, fontError] = useFonts({
		'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
		'Sora-SemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Notification />
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="(tabs)" />
				<Stack.Screen
					name="catalog/[id]"
					options={{
						headerShown: true,
						headerTitle: 'Описание',
						headerStyle: {
							backgroundColor: Colors.background,
						},
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
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
