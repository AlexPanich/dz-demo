import { View, Pressable, PressableProps, StyleSheet } from 'react-native';
import { Colors, Radius } from '../../../shared/tokens';
import PlusIcon from '../../../assets/icons/plus';

export default function Button(props: PressableProps) {
	return (
		<Pressable {...props}>
			<View style={styles.wrapper}>
				<PlusIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Radius.r12,
		height: 32,
		width: 32,
		paddingHorizontal: 16,
		backgroundColor: Colors.primary,
	},
});
