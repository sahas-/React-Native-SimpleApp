'using strict';

var React=require('react-native');

var {
	StyleSheet,
	View,
	Text,
	Component,
	TouchableHighlight,
	AlertIOS,
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
	},
	wrapper: {
    	borderRadius: 5,
    	marginBottom: 5,
  	},
});

class Welcome extends Component {
	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.description} onPress={() => AlertIOS.alert(
            	'Alert',
            	'Do you like React-Native ?',
            	 [
	              {text: 'Yes', onPress: () => console.log('Liked it !!')},
	              {text: 'No', onPress: () => console.log('Not yet, need more time..')},
            	]
          		)}>
				Featured View..click here..
			</Text>
			</View>
			);
	}
}

module.exports = Welcome;