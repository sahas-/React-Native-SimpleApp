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
		backgroundColor: 'red',
		color: 'white',
	},
	container: {
		flex:1,
		alignItems: 'center',
    	justifyContent: 'center',
	}
});

class More extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					More ...
				</Text>
			</View>
			);
	}
}

module.exports = More;