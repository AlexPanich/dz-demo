import { Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Order() {
	return (
		<SafeAreaView>
			<Text>Заказ</Text>
			<Link href="/(tabs)/catalog">
				<Text>Назад в каталог</Text>
			</Link>
			<Link href="/(order)/adress">
				<Text>На страницу редактирования адреса</Text>
			</Link>
			<Link href="/(order)/success">
				<Text>На страницу заказ оформлен</Text>
			</Link>
		</SafeAreaView>
	);
}
