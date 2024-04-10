import { useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import { router } from 'expo-router';

export default function IndexPage() {
	const animagedValue = useRef(new Animated.Value(-100)).current;
	const opacity = animagedValue.interpolate({
		inputRange: [-100, -30, 0],
		outputRange: [0, 0.3, 1],
	});

	const onEnter = () => {
		Animated.timing(animagedValue, {
			toValue: 0,
			duration: 1500,
			useNativeDriver: true,
		}).start();
	};

	const start = () => {
		router.push('/catalog');
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/welcome-background.png')}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.content}>
					<Animated.View
						style={{ transform: [{ translateY: animagedValue }], opacity }}
						onLayout={onEnter}
					>
						<Text style={styles.caption}>Один из самых вкусных кофе в городе!</Text>
					</Animated.View>
					<Text style={styles.promo}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
					<Button title="Начать" onPress={start} />
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	content: {
		paddingHorizontal: 30,
		paddingTop: 50,
		paddingBottom: 43,
		gap: Gaps.g24,
	},
	caption: {
		color: Colors.white,
		fontSize: Fonts.f34,
		fontFamily: Fonts.semibold,
		textAlign: 'center',
	},
	promo: {
		color: Colors.gray,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
		textAlign: 'center',
	},
});
