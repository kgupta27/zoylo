import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import DocList from './containers/DocList';

const store = configureStore()

const reduxTest = () => (
  <Provider store={store}>
    <App>
    <DocList/></App>
  </Provider>
)


AppRegistry.registerComponent('reduxTest', () => reduxTest);
