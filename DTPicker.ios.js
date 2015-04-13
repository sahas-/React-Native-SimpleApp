'using strict';

var React = require('react-native');
var {
	DatePickerIOS,
	Text,
	Component,
	View,
	StyleSheet
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

class DTPicker extends Component{
	
	constructor(props){
    	super(props);
    	this.state={date: new Date()};
  	}

	render(){
		return(
			<View style = {styles.container}>
				<DatePickerIOS
		          date={this.state.date}
		          mode="datetime"
		          onDateChange={()=>{this.setState({date:date});}}
		        />
			</View>
			);
	}
}

module.exports = DTPicker;