import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Size } from '../types';
import { Colors, Gaps, Radius } from '../tokens';

const items = Object.values(Size);

type SizeSelectProps = {
	value: Size;
	onChage: (size: Size) => void;
};

export default function SizeSelect({ value, onChage }: SizeSelectProps) {
	return (
		<View style={styles.wrapper}>
			{items.map((item) => (
				<Pressable
					style={item === value ? styles.buttonActive : styles.button}
					key={item}
					onPress={() => onChage(item)}
				>
					<Text style={styles.sizeRadioText}>{item}</Text>
				</Pressable>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		gap: Gaps.g12,
	},
	button: {
		flex: 1,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: Colors.gray7,
		borderRadius: Radius.r12,
	},
	buttonActive: {
		flex: 1,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: Colors.primary,
		borderRadius: Radius.r12,
		backgroundColor: Colors.seaFoam,
	},
	sizeRadioText: {
		textAlign: 'center',
	},
});
