import React, { useContext } from "react";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import GithubContext from "../context/githubContext";
import { Box } from "@chakra-ui/react";

const Filters = (text) => {
  const githubContext = useContext(GithubContext);

  const { searchReposAsc, searchReposDesc } = githubContext;

  const handleSortAsc = () => {
    searchReposAsc(text);
    console.log(text);
  };

  const handleSortDesc = () => {
    searchReposDesc(text);
    console.log(text);
  };

  return (
    <Box display='flex'>
      <Tag
        size='lg'
        variant='subtle'
        colorScheme='cyan'
        onClick={handleSortAsc}
        cursor='pointer'
        ml={4}
      >
        <TagLeftIcon boxSize='12px' as={AiOutlineSortAscending} />
        <TagLabel>Asc</TagLabel>
      </Tag>
      <Tag
        size='lg'
        variant='subtle'
        colorScheme='cyan'
        cursor='pointer'
        onClick={handleSortDesc}
        ml={4}
      >
        <TagLeftIcon boxSize='12px' as={AiOutlineSortDescending} />
        <TagLabel>Desc</TagLabel>
      </Tag>
    </Box>
  );
};

export default Filters;
