import { DOC_LIST,REQUEST_POSTS } from './constants';

export const doctors = item => ({
  type: 'DOC_LIST',
  item
})

export const requestPosts= item => ({
  type: REQUEST_POSTS,
  item
})