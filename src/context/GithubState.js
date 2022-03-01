import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_REPOS, GET_REPO, GET_MARKDOWN } from "../types";
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

  const getMarkDown = async (login, name) => {
    const res = await axios.get(
      `https://api.github.com/repos/${login}/${name}/contents/README.md?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    // https://www.npmjs.com/package/js-base64
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
        searchRepos,
        getRepo,
        getMarkDown,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
