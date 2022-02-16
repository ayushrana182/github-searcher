import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_REPOS } from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState={
      
        repos:[],
       
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search users
    const searchRepos = async text => {
    
    
        const res = await axios.get(`https://api.github.com/search/repositories?q=${text}&client_id=${githubClientId}
              &client_secret=${githubClientSecret}`);
              console.log(res)
    
        dispatch({
            type: SEARCH_REPOS,
            payload : res.data.items
        });
       
    };

 

    return <GithubContext.Provider 
    value={{
        repos: state.repos,
        searchRepos,
    }}
    
    >
    {props.children}
    
    </GithubContext.Provider>
}
export default GithubState;