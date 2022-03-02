import React, { useContext } from "react";
import GithubContext from "../../context/githubContext";
import RepoItem from "./RepoItem";
import { Container } from "@chakra-ui/react";

const Repos = () => {
  const githubContext = useContext(GithubContext);

  const { repos } = githubContext;
  return (
    <div>
      <Container>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </Container>
    </div>
  );
};

export default Repos;
