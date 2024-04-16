import { StyleSheet, View } from 'react-native';
import { Colors } from '../tokens';

export default function Separator() {
	return <View style={styles.separaor} />;
}

const styles = StyleSheet.create({
	separaor: { borderColor: Colors.gray8, borderBottomWidth: 1 },
});
