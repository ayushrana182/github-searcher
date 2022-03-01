import React, { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import GithubContext from "../../context/githubContext";

const MarkdownView = () => {
  const githubContext = useContext(GithubContext);
  const { getMarkDown, md } = githubContext;

  let params = useParams();

  useEffect(() => {
    getMarkDown(params.login, params.name);

    // eslint-disable-next-line
  }, [params.name]);

  // https://www.npmjs.com/package/react-markdown
  return <>{Boolean(md) && <ReactMarkdown children={md.content} />} </>;
};

export default MarkdownView;
