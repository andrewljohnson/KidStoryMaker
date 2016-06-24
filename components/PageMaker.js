import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var Button = require('react-native-button');
let { connect } = require('react-redux/');

class PageMaker extends Component {

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  componentWillMount() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(['Cave', 'Road', 'Toys', 'Skeleton', 'Car']),
    });
  }

  render() {
    var backroundImages = ['road', 'cave', 'cave-entrance']
    var images = ['none', 'skeleton', 'boy', 'toys', 'car', 'skeleton-car']

    return ( <View style={styles.container}>
               <View style={{flexDirection:'row', marginBottom: 20, justifyContent: 'space-between', height:44}}>
                 <Button onPress={this.props.navigator.pop} style={{textAlign:'left', paddingTop:3}}>
                   Main Menu
                 </Button> 
                 <Text style={{textAlign:'center', fontSize:20}}>Add Page</Text>
                 <View />
                 <View />
              </View>

               <Text style={styles.inputLabel}>Speak or type text for the page.</Text>
               <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20,}}
                  returnKeyType='done' autoFocus={true}
                  onChangeText={(text) => this.setState({text})}
                  onSubmitEditing={() => this.addPageAndPop()}
                  value={this.state ? this.state.text : ''}
               />

               <Text style={styles.inputLabel}>Choose an image.</Text>
               <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData}</Text>}
               />
             </View>
    );
  }

  addPageAndPop() {
    let text = this.state && this.state.text ? this.state.text : ''
    this.props.dispatch({type: 'NEW_PAGE', text: text})
    this.props.navigator.pop()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputLabel: {
    fontSize: 20,
    marginBottom:10, 
    color:'gray'
  }
});

module.exports = connect()(PageMaker);
