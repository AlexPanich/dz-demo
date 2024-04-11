import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Colors, Fonts, Radius } from '../../../shared/tokens';
import MarkerIcon from '../../../assets/icons/marker';
import GeoIcon from '../../../assets/icons/geo';
import ComentIcom from '../../../assets/icons/coment';
import { useAtom } from 'jotai';
import { addressAtom } from '../model/geo.model';
import { useState } from 'react';
import Button from '../../../shared/Button/Button';

export default function AddressGeo() {
	const [addressState, setAddressState] = useAtom(addressAtom);

	const [geo, setGeo] = useState(addressState.geo);
	const [coment, setComent] = useState(addressState.coment);

	const saveAddress = () => {
		setAddressState({
			geo,
			coment,
		});
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.fields}>
				<View style={styles.fieldWrapper}>
					<TextInput
						value={geo ?? undefined}
						onChangeText={setGeo}
						placeholder="Укажите адресс доставки"
					/>
					<View style={styles.icon}>
						<MarkerIcon />
					</View>
					<Pressable style={styles.geo}>
						<GeoIcon />
					</Pressable>
				</View>
				<View style={[styles.fieldWrapper, styles.multi]}>
					<TextInput
						value={coment ?? undefined}
						onChangeText={setComent}
						multiline
						numberOfLines={7}
						maxLength={140}
						textAlignVertical="top"
						placeholder="Коментарий для курьера"
					/>
					<View style={styles.icon}>
						<ComentIcom />
					</View>
				</View>
			</View>
			<Button title="Сохранить" onPress={saveAddress} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	fields: {
		gap: 16,
	},
	fieldWrapper: {
		borderColor: Colors.gray8,
		borderWidth: 1,
		borderRadius: Radius.r14,
		paddingLeft: 42,
		paddingRight: 10,
		height: 56,
		fontSize: 14,
		fontFamily: Fonts.regular,
		color: Colors.primaryText,
		justifyContent: 'center',
	},
	multi: {
		justifyContent: 'flex-start',
		height: 139,
		paddingTop: 15,
	},
	icon: {
		position: 'absolute',
		top: 19,
		left: 16,
	},
	geo: {
		backgroundColor: Colors.primary,
		width: 34,
		height: 34,
		borderRadius: Radius.r10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 9,
		top: 11,
	},
});
