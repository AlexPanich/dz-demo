import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Colors, Fonts, Radius } from '../../../shared/tokens';
import EgitGrayIcon from '../../../assets/icons/edit-gray';
import { useAtomValue } from 'jotai';
import { addressAtom } from '../model/geo.model';

export default function CartGeo() {
	const { geo, coment } = useAtomValue(addressAtom);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Адресс доставки</Text>
			<View style={styles.address}>
				<Text style={styles.geo}>{geo}</Text>
				<Text style={styles.coment}>{coment}</Text>
			</View>
			<Link href="/(order)/address" asChild>
				<Pressable style={styles.linkBtn}>
					<View style={styles.linkIcon}>
						<EgitGrayIcon />
					</View>
					<Text style={styles.linkText}>Редактировать адресс</Text>
				</Pressable>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		gap: 16,
	},
	title: {
		color: Colors.primaryText,
		fontSize: Fonts.f16,
		fontFamily: Fonts.semibold,
	},
	address: {
		gap: 4,
	},
	geo: {
		color: Colors.gray9,
		fontSize: Fonts.f14,
		fontFamily: Fonts.semibold,
	},
	coment: {
		color: Colors.gray10,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	linkBtn: {
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.gray7,
		borderRadius: Radius.r16,
		height: 27,
		justifyContent: 'center',
		paddingLeft: 30,
		paddingRight: 12,
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'flex-start',
	},
	linkText: {
		color: Colors.gray9,
		fontSize: Fonts.f12,
		fontFamily: Fonts.regular,
	},
	linkIcon: {
		position: 'absolute',
		left: 12,
	},
});
