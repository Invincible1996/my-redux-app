/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RootReducers from './src/redux/reducers'
import AppNavigator from './src/app/Router'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

const store = createStore(RootReducers, applyMiddleware(thunkMiddleware, logger))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator screenProps={{ theme: 'red' }} />
      </Provider>
    );
  }
}


