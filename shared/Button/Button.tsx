import { Pressable, PressableProps, View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export default function Button({ title, ...props }: PressableProps & { title: string }) {
	return (
		<Pressable {...props}>
			<View style={styles.root}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Radius.r16,
		height: 62,
		backgroundColor: Colors.primary,
	},
	title: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontWeight: 'bold',
	},
})