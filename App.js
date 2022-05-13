import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello World!</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#06bcee',
		marginTop: 30,
		backgroundColor: '#bdbdbd',
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
});
