'use strict';

var React = require('react-native');
var Welcome = require('./welcome.ios.js');
var More = require('./more.ios.js');
var DTPicker =  require('./DTPicker.ios.js');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class SimpleApp extends Component {
  constructor(props){
    super(props);
    this.state={selectedTab:'More'};
  }

  render(){
    return(
      <TabBarIOS>
        <TabBarIOS.Item selected={this.state.selectedTab==='Welcome'} 
          icon={{uri:'featured'}} 
          onPress={()=>{this.setState({selectedTab:'Welcome'});}}>
          <Welcome/>
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          icon={{uri:'more'}}
          onPress={()=>{this.setState({selectedTab:'More'});}}
          selected={this.state.selectedTab==='More'}>
          <More/>
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          icon={{uri:'history'}}
          onPress={()=>{this.setState({selectedTab:'DTPicker'});}}
          selected={this.state.selectedTab==='DTPicker'}>
          <DTPicker />
        </TabBarIOS.Item>

      </TabBarIOS>
      )
  }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

