import { View, Text, Pressable, PressableProps, StyleSheet } from 'react-native';
import { Colors, Fonts, Radius } from '../../../shared/tokens';

export default function Button({
	title,
	active,
	...props
}: PressableProps & { title: string; active: boolean }) {
	return (
		<Pressable {...props}>
			<View style={{ ...styles.wrapper, backgroundColor: active ? Colors.primary : Colors.white }}>
				<Text
					style={{
						...styles.title,
						color: active ? Colors.white : Colors.gray4,
						fontFamily: active ? Fonts.semibold : Fonts.regular,
					}}
				>
					{title}
				</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		borderRadius: Radius.r12,
		paddingTop: 8,
		paddingBottom: 10,
		paddingHorizontal: 16,
	},
	title: {
		fontSize: Fonts.f14,
	},
});
