import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_REPOS,
  GET_REPO,
  GET_MARKDOWN,
  SEARCH_REPOSASC,
  SEARCH_REPOSDESC,
} from "../types";
import base64 from "base-64";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    repos: [],
    md: null,
    repo: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //api.github.com/

  //Search Repos
  const searchRepos = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}&page=1&per_page=50
              &client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items,
    });
  };

  //Search Ascending
  const searchReposAsc = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/repositories?q=${text}&sort=stars&order=asc&client_id=${githubClientId}&page=1&per_page=50
              &client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_REPOSASC,
      payload: res.data.items,
    });
  };

  //Search Descending
  const searchReposDesc = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/repositories?q=${text}&sort=stars&order=desc&client_id=${githubClientId}&page=1&per_page=50
              &client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_REPOSDESC,
      payload: res.data.items,
    });
  };

  // Get Repo
  const getRepo = async (login, name) => {
    const res = await axios.get(
      `https://api.github.com/repos/${login}/${name}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPO,
      payload: res.data,
    });
  };

  // Get Markdown
  const getMarkDown = async (login, name) => {
    const res = await axios.get(
      `https://api.github.com/repos/${login}/${name}/contents/README.md?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    // https://www.npmjs.com/package/base-64
    res.data.content = base64.decode(res.data.content);
    dispatch({
      type: GET_MARKDOWN,
      payload: res.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        repo: state.repo,
        md: state.md,
        loading: state.loading,
        searchRepos,
        getRepo,
        getMarkDown,
        searchReposAsc,
        searchReposDesc,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
