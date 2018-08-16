import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import RNText from './src/components/RNText';
import RootElements from './src/router/Routers';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <RootElements />
      </Provider>
    );
  }
}

export default   App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
