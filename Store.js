'use strict';

// A Redux store for the local state of the react component, 
// which is embedded in a mostly native mobile app.
//
// The root state object is not immutable because redux discourages
// that, but each child is immutable.

let Immutable = require('immutable');
let { fromJS, List, Map } = Immutable;
let redux = require('redux');

let initialState = {log: List()};

let reducers = {
  // action contains:
  //   text: the text for the page
  NEW_PAGE: (state, action) => {
    let page = {'text': action.text};
    let pages = state.pages ? state.pages : [];
    pages.push(page);
    console.log("There are now " + pages.length + " pages");
    return {...state, 
            pages:pages, 
           };
  },
};

function reducer(state = initialState, action) {
  let f = reducers[action.type];
  if (f) {
    return f(state, action);
  } else {
    return state;
  }
};
let Store = () => {
  return redux.createStore(reducer);
};

module.exports = Store;