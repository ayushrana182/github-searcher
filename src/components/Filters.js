import React, { useContext, useEffect } from "react";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import GithubContext from "../context/githubContext";
import { Box } from "@chakra-ui/react";

const Filters = () => {
  const githubContext = useContext(GithubContext);

  const { searchReposAsc } = githubContext;

  const handleSortAsc = () => {
    searchReposAsc();
  };
  return (
    <Box display='flex'>
      <Tag
        size='lg'
        variant='subtle'
        colorScheme='cyan'
        onChange={handleSortAsc}
        cursor='pointer'
      >
        <TagLeftIcon boxSize='12px' as={AiOutlineSortAscending} />
        <TagLabel>Asc</TagLabel>
      </Tag>
      <Tag
        size='lg'
        variant='subtle'
        colorScheme='cyan'
        cursor='pointer'
        // onClick={onChange1}
        ml={4}
      >
        <TagLeftIcon boxSize='12px' as={AiOutlineSortDescending} />
        <TagLabel>Desc</TagLabel>
      </Tag>
    </Box>
  );
};

export default Filters;
