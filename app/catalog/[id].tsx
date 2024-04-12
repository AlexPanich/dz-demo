import { StyleSheet, View } from 'react-native';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Colors } from '../../shared/tokens';
import FullScreenCard from '../../widgets/full-screen-card/ui/FullScreenCard';

export default function Card() {
	const { id } = useLocalSearchParams<{ id: string }>();

	if (!id) {
		return <Redirect href={'/(tabs)/catalog'} />;
	}

	return (
		<View style={styles.wrapper}>
			<FullScreenCard productId={id} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.background,
	},
});
