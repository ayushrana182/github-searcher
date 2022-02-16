import {SEARCH_REPOS} from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch (action.type) {
      case SEARCH_REPOS:
        return {
          ...state,
          repos: action.payload,
          loading: false
        };
     
      default:
        return state;
    }
  };
  