import { Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Card() {
	const { id } = useLocalSearchParams();

	return (
		<SafeAreaView>
			<Text>Карточка напитка {id}</Text>
			<Link href="/catalog">
				<Text>Назад в каталог</Text>
			</Link>
		</SafeAreaView>
	);
}
