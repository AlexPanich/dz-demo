import { Tabs } from 'expo-router';
import MainIcon from '../../assets/icons/tabs/main';
import { Colors, Fonts, Radius } from '../../shared/tokens';
import CartIcon from '../../assets/icons/tabs/cart';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import UnderscoreIcon from '../../assets/icons/tabs/uderscore';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBarStyle,
				tabBarBackground: () => <View style={styles.delimiter} />,
				tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: styles.tabBarLabelStyle,
			}}
		>
			<Tabs.Screen
				name="catalog"
				options={{
					tabBarLabel: 'Главная',
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.icon}>
								<MainIcon focused={focused} />
								{focused && <UnderscoreIcon style={styles.underscore} />}
							</View>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="(order)"
				options={{
					tabBarLabel: 'Заказ',
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.icon}>
								<CartIcon focused={focused} />
								{focused && <UnderscoreIcon style={styles.underscore} />}
							</View>
						);
					},
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: Colors.white,
		borderTopLeftRadius: Radius.r24,
		borderTopRightRadius: Radius.r24,
		height: Platform.select({
			ios: 99,
			android: 79,
		}),
	},
	tabBarLabelStyle: {
		color: Colors.gray5,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
	},
	icon: {
		alignItems: 'center',
	},
	underscore: {
		position: 'absolute',
		bottom: -10,
	},
	delimiter: {
		borderLeftWidth: 1,
		borderColor: Colors.gray7,
		height: 46,
		width: 0,
		position: 'absolute',
		top: 16,
		left: Dimensions.get('screen').width / 2 - 4,
	},
});
