import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Button = require('react-native-button');

class BookViewer extends Component {

  render() {
    return ( <View style={styles.container}>
               <Button onPress={this.props.navigator.pop}>
                 Main Menu
               </Button>

               <Text style={{textAlign:'center'}}>
                 THE BOOK
               </Text>
             </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  },
});

module.exports = BookViewer;
