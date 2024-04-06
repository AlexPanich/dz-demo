import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from './shared/tokens';
import Button from './shared/Button/Button';

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('./assets/images/welcome-background.png')}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.content}>
					<Text style={styles.caption}>Один из самых вкусных кофу в городе!</Text>
					<Text style={styles.promo}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
					<Button title='Начать' />
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
	},
	caption: {
		color: Colors.white,
		fontSize: Fonts.f34,
		textAlign: 'center',
		marginBottom: 8,
		fontWeight: 'bold',
	},
	promo: {
		color: Colors.gray,
		fontSize: Fonts.f14,
		textAlign: 'center',
		marginBottom: 24,
	}
});
