import { Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Adress() {
	return (
		<SafeAreaView>
			<Text>Изменить адресс</Text>
			<Link href="/(tabs)/catalog">
				<Text>Назад в каталог</Text>
			</Link>
			<Link href="/(order)/cart">
				<Text>На страницу оформления заказа</Text>
			</Link>
		</SafeAreaView>
	);
}
