/**
 * An app that lets you make kid story books
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
} from 'react-native';

let Button = require('react-native-button');
let BookViewer = require('./components/BookViewer');
let MainMenu = require('./components/MainMenu');
let PageMaker = require('./components/PageMaker');

let { connect, Provider } = require('react-redux');

let Store = require('./Store');
let store = Store();

// Pipe all the redux state through as props
function select(state) {
  return state;
}

let KidStoryMaker = connect(select)(React.createClass({

  render() {

    return (
       <Navigator style={{backgroundColor:'transparent', marginTop:20, padding:10 }}
          initialRoute={{id: 'main_menu', index: 0}}
         routeSequence={['main_menu', 'page_maker']}
           renderScene={(route, navigator) => {
          if (route.id == 'main_menu') {
            return ( <MainMenu navigator={navigator} />
                   );
          } else if (route.id == 'page_maker') {
            return ( <PageMaker navigator={navigator} />
                   );
          } else if (route.id == 'book_viewer') {
            return ( <BookViewer navigator={navigator} />
                   );
          } else {
            console.log("NOT A REAL ROUTE: " + route.id);
          }
      }}
      />
    );
  }
 
}));

let KidStoryMakerWrapper = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <KidStoryMaker />
      </Provider>
    );
  }
});


AppRegistry.registerComponent('KidStoryMakerWrapper', () => KidStoryMakerWrapper);
