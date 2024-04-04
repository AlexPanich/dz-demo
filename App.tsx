import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from './shared/tokens';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.caption}>Один из самых вкусных кофу в городе!</Text>
				<Text style={styles.promo}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
				<Button title='Начать' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-end',
	},
	content: {
		backgroundColor: Colors.black,
		paddingHorizontal: 30,
		paddingTop: 50,
		paddingBottom: 43,
	},
	caption: {
		color: Colors.white,
		fontSize: Fonts.f34,
		textAlign: 'center',
		marginBottom: 8,
	},
	promo: {
		color: Colors.gray,
		fontSize: Fonts.f14,
		textAlign: 'center',
		marginBottom: 24,
	}
});
