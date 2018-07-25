/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {StackNavigator} from 'react-navigation';

import SearchPage from './SearchPage';

const App = StackNavigator({
  Home: {screen: SearchPage},
});
export default App;
