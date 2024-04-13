import { ScrollView, StyleSheet, View } from 'react-native';
import Button from './Button';
import { Gaps } from '../../../shared/tokens';
import { useAtom } from 'jotai';
import { typeSelectAtom } from '../model/type-select.model';
import { CoffeeType } from '../../../shared/types';

type ButtonType = CoffeeType | 'all';

const buttons: { type: ButtonType; name: string }[] = [
	{ type: 'all', name: 'Все' },
	{ type: 'cappuccino', name: 'Капучино' },
	{ type: 'americano', name: 'Американо' },
	{ type: 'latte', name: 'Латте' },
	{ type: 'macchiato', name: 'Маккиято' },
];
export default function TypeSelect() {
	const [selectedType, setType] = useAtom(typeSelectAtom);

	const selectType = (type: ButtonType) => () => {
		const coffeeType = type === 'all' ? null : type;
		setType(coffeeType);
	};

	return (
		<View style={styles.wrapper}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.content}
			>
				{buttons.map(({ type, name }) => (
					<Button
						key={type}
						title={name}
						active={(type === 'all' && selectedType === null) || selectedType === type}
						onPress={selectType(type)}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 28,
		paddingBottom: 24,
	},
	content: {
		gap: Gaps.g8,
		paddingHorizontal: 30,
	},
});
