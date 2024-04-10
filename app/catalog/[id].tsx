import { Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Card() {
	return (
		<SafeAreaView>
			<Text>Карточка напитка</Text>
			<Link href="/catalog">
				<Text>Назад в каталог</Text>
			</Link>
		</SafeAreaView>
	);
}
