import { combineReducers } from 'redux';

import docReducer from './docList/reducer';

export default combineReducers({
    docReducer: docReducer
});