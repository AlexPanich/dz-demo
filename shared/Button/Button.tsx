import {
	Pressable,
	PressableProps,
	Text,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useRef } from 'react';

export default function Button({ title, ...props }: PressableProps & { title: string }) {
	const animagedValue = useRef(new Animated.Value(100)).current;
	const color = animagedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const hoverIn = (event: GestureResponderEvent) => {
		Animated.timing(animagedValue, {
			toValue: 0,
			useNativeDriver: true,
			duration: 100,
		}).start();
		props.onPressIn && props.onPressIn(event);
	};

	const hoverOut = (event: GestureResponderEvent) => {
		Animated.timing(animagedValue, {
			toValue: 100,
			useNativeDriver: true,
			duration: 100,
		}).start();
		props.onPressOut && props.onPressOut(event);
	};

	return (
		<Pressable {...props} onPressIn={hoverIn} onPressOut={hoverOut}>
			<Animated.View style={{ ...styles.root, backgroundColor: color }}>
				<Text style={styles.title}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Radius.r16,
		height: 62,
	},
	title: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
});
