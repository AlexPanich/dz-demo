import { StyleSheet, TextInput, View } from 'react-native';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import MarkerIcon from '../../../assets/icons/marker';

import ComentIcom from '../../../assets/icons/coment';
import { useAtom } from 'jotai';
import { deliveryInfoAtom } from '../model/delivery-info.model';
import { useState } from 'react';
import Button from '../../../shared/Button/Button';

import Geo from '../../../features/geo/ui/Geo';

export default function Ed() {
	const [addressState, setAddressState] = useAtom(deliveryInfoAtom);

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
					<View style={styles.geo}>
						<Geo onGetGeo={setGeo} />
					</View>
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
		gap: Gaps.g16,
	},
	fieldWrapper: {
		borderColor: Colors.gray8,
		borderWidth: 1,
		borderRadius: Radius.r14,
		paddingLeft: 42,
		paddingRight: 52,
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
		paddingRight: 10,
	},
	icon: {
		position: 'absolute',
		top: 19,
		left: 16,
	},
	geo: {
		position: 'absolute',
		right: 9,
		top: 11,
	},
});
