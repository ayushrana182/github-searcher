import { GET_MARKDOWN, GET_REPO, SEARCH_REPOS } from "../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case GET_REPO:
      return {
        ...state,
        repo: action.payload,
      };
    case GET_MARKDOWN:
      return {
        ...state,
        md: action.payload,
      };
    default:
      return state;
  }
};
