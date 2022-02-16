import { Box, Button, Center, FormControl, HStack, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import GithubContext from "../context/githubContext";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something');
    } else {
      githubContext.searchRepos(text);
      setText('');
      console.log(text);
    }
  };

  return(
    <FormControl  >
      <Input placeholder='Search Bar' variant='filled' value={text} onChange={onChange} />
      <Button onClick={onSubmit}>Search</Button>
    </FormControl>
    ) 
};

const TopBar = () => {
  return (
    <Center>
      <Box maxWidth='8x1' margin='auto' p={5}>
        <HStack spacing={8}>
          <SearchBar />
          <ColorModeSwitcher />
        </HStack>
      </Box>
    </Center>
  );
};

export default TopBar;
