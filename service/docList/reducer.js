import { DOC_LIST, REQUEST_POSTS } from './constants';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

const docReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DOC_LIST':
            return [
                ...state,
                {
                    items: action.item,
                    text: action.text,
                    isFetching: false,
                    didInvalidate: false,
                }
            ]
        case 'REQUEST_POSTS':
            return [
                ...state,
                {
                    isFetching: true,
                    didInvalidate: false
                }]
        default:
            return state
    }
}

export default docReducer
