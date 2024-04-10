import { Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Catalog() {
	return (
		<SafeAreaView>
			<Text>Catalog</Text>
			<Link href="/catalog/coffeeId">
				<Text>На карточку напитка</Text>
			</Link>
			<Link href="/adress">
				<Text>На страницу редактирования адреса</Text>
			</Link>
			<Link href="/cart">
				<Text>На страницу оформления заказа</Text>
			</Link>
		</SafeAreaView>
	);
}
