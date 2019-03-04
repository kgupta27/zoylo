import { createStore, applyMiddleware } from 'redux'
import RootReducer from './service/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store = createStore(RootReducer,undefined, applyMiddleware(thunk))
  return store
}