import { Box, Button, Center, FormControl, HStack, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import GithubContext from "../context/githubContext";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    if (text === '') {
      alert('Please enter something');
    } else {
      githubContext.searchRepos(text);
    }
  };

  return(
    <FormControl style={{display:"flex", justifyContent:"flex-start"}}>
      <Input placeholder='Search Bar'  value={text} onChange={onChange} sx={{mr:6}} />
      <Button onClick={onSubmit} rightIcon={<AiOutlineSearch />}>Search</Button>
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
