import {
	StyleSheet,
	Text,
	View,
	Image,
	ActivityIndicator,
	Dimensions,
	Platform,
} from 'react-native';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import Button from '../../../shared/Button/Button';
import StarIcon from '../../../assets/icons/star';
import { useRouter } from 'expo-router';
import { useProduct } from '../model/full-screen-card.hooks';
import { FullScreenCardProps } from '../model/full-screen-card.types';
import SizeSelect from '../../../shared/SizeSelect/SizeSelect';
import { Size } from '../../../shared/types';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { addToCartAtom } from '../../cart/model/cart.model';
import { factorSize } from '../../../shared/constants';

export default function FullScreenCard({ productId }: FullScreenCardProps) {
	const router = useRouter();
	const { product, isLoading, error } = useProduct(productId);
	const [size, setSize] = useState<Size>(Size.M);
	const addToCart = useSetAtom(addToCartAtom);

	const addToCartHandle = () => {
		if (!product) {
			return;
		}
		addToCart({ product, size });
		router.push('/catalog');
	};

	return (
		<View style={styles.wrapper}>
			{isLoading && (
				<ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
			)}
			{error && (
				<Text style={styles.errorMessage}>
					Упс... 😞 что то пошло не так. Попробуйте заказать другой кофе.
				</Text>
			)}
			{product && (
				<>
					<Image source={{ uri: product.image }} style={styles.image} />
					<View style={styles.info}>
						<View style={styles.infoLeft}>
							<Text style={styles.name}>{product.name}</Text>
							<Text style={styles.subTitle}>{product.subTitle}</Text>
						</View>
						<View style={styles.infoRight}>
							<StarIcon />
							<Text style={styles.rating}>{product.rating}</Text>
						</View>
					</View>
					<View style={styles.seperater} />
					<View style={styles.description}>
						<Text style={styles.blockTitle}>Описание</Text>
						<Text style={styles.descriptionText}>{product.description}</Text>
					</View>
					<View style={styles.sizeSelector}>
						<Text style={styles.blockTitle}>Размер</Text>
						<SizeSelect value={size} onChage={setSize} />
					</View>
					<View style={styles.footer}>
						<View style={styles.price}>
							<Text style={styles.priceTitle}>Цена</Text>
							<Text style={styles.priceValue}>{product.price + factorSize[size]} &#8381;</Text>
						</View>
						<View style={styles.actionWrapper}>
							<Button title="В корзину" onPress={addToCartHandle} />
						</View>
					</View>
				</>
			)}
		</View>
	);
}

const width = Dimensions.get('screen').width - 60;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.background,
		paddingHorizontal: 30,
		paddingVertical: 12,
	},
	activity: {
		marginTop: 24,
	},
	errorMessage: {
		color: Colors.gray,
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		textAlign: 'center',
		paddingHorizontal: 30,
	},
	image: {
		width: width,
		height: width * 0.72,
		resizeMode: 'cover',
		borderRadius: 16,
		marginBottom: 20,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 24,
	},
	infoLeft: {
		gap: Gaps.g8,
	},
	infoRight: {
		flexDirection: 'row',
		gap: Gaps.g4,
		alignItems: 'center',
		alignSelf: 'flex-start',
		paddingTop: Platform.select({
			ios: 4,
			android: 8,
		}),
	},
	name: {
		color: Colors.primaryText,
		fontSize: Fonts.f20,
		fontFamily: Fonts.semibold,
	},
	subTitle: {
		color: Colors.gray5,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	rating: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	seperater: {
		borderColor: Colors.gray8,
		borderBottomWidth: 1,
		marginBottom: 24,
	},
	description: {
		gap: Gaps.g12,
		marginBottom: 24,
	},
	blockTitle: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	descriptionText: {
		color: Colors.gray5,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
	},
	sizeSelector: {
		gap: Gaps.g12,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderTopLeftRadius: Radius.r24,
		borderTopRightRadius: Radius.r24,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.gray7,
		height: Platform.select({
			ios: 119,
			android: 99,
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: Gaps.g40,
		paddingHorizontal: 30,
		paddingTop: 16,
		shadowColor: Colors.gray8,
		shadowOpacity: 0.12,
		shadowRadius: 8,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	price: {
		gap: Gaps.g4,
		width: 60,
	},
	priceTitle: {
		color: Colors.gray5,
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
	},
	priceValue: {
		color: Colors.primary,
		fontSize: Fonts.f18,
		fontFamily: Fonts.semibold,
	},
	actionWrapper: {
		flex: 1,
	},
});
