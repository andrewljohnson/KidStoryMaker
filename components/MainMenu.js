import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Button = require('react-native-button');

class MainMenu extends Component {

  componentDidMount() {
    this.props.navigator.push({id:'page_maker'});
  }

  render() {
    return ( <View style={styles.container}>
               <View />
               <Text style={{textAlign:'center', fontSize:20}}> Kid Story Maker </Text>
               <Button onPress={this._showBook.bind(this)}>
                 View Book
               </Button>
               <View />
               <Button onPress={this._showPageMaker.bind(this)}>
                 Add Page
               </Button>
               <View />
             </View>
    );
  }

  _showPageMaker() {
    this.props.navigator.push({id:'page_maker'});
  }

  _showBook() {
    this.props.navigator.push({id:'book_viewer'});    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
});

module.exports = MainMenu;
