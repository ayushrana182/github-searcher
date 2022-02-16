import React, { useContext } from 'react'
import GithubContext from '../../context/githubContext';
import RepoItem from './RepoItem';

const Repos = () => {
    const githubContext = useContext(GithubContext);

    const { repos } = githubContext;
  return (
    <div>{repos.map((repo) => 
        <RepoItem key={repo.id} repo={repo}/>
        )}</div>
  )
}

export default Repos