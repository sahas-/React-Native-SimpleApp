'using strict';

var React=require('react-native');

var {
	StyleSheet,
	View,
	Text,
	Component,
} = React;

var styles = StyleSheet.create({
	description: {
		fontSize: 20,
		backgroundColor: 'blue',
		color: 'white',
	},
	container: {
		flex:1,
		alignItems: 'center',
    	justifyContent: 'center',
	}
});

class Welcome extends Component {
	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.description}>
				Featured View...
			</Text>
			</View>
			);
	}
}

module.exports = Welcome;