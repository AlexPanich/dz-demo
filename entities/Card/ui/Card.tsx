import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import Button from './Button';
import { Link } from 'expo-router';
import { Coffee } from '../../../shared/types';
import { useSetAtom } from 'jotai';
import { addToCartAtom } from '../../../widgets/cart/model/cart.model';

export default function Card(product: Coffee) {
	const { name, subTitle, price, image, id } = product;
	const addToCart = useSetAtom(addToCartAtom);
	return (
		<Link href={`/catalog/${id}`} asChild>
			<Pressable>
				<View style={styles.wrapper}>
					<Image style={styles.image} source={{ uri: image }} />
					<View style={styles.description}>
						<Text style={styles.title}>{name}</Text>
						<Text style={styles.subTitle}>{subTitle}</Text>
					</View>
					<View style={styles.commerce}>
						<Text style={styles.price}>{price} &#8381;</Text>
						<Button onPress={() => addToCart({ product, size: 'M' })} />
					</View>
				</View>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: Colors.white,
		width: Dimensions.get('screen').width / 2 - 38,
		borderRadius: Radius.r16,
		padding: 4,
	},
	image: {
		resizeMode: 'cover',
		width: Dimensions.get('screen').width / 2 - 46,
		height: Dimensions.get('screen').width / 2 - 56,
	},
	description: {
		gap: Gaps.g4,
		paddingLeft: 8,
		marginTop: 12,
	},
	title: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	subTitle: {
		color: Colors.gray5,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	commerce: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 8,
		alignItems: 'center',
	},
	price: {
		color: Colors.gray4,
		fontSize: Fonts.f18,
		fontFamily: Fonts.semibold,
	},
});
