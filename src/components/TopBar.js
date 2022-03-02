import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import GithubContext from "../context/githubContext";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Filters from "./Filters";

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    if (text === "") {
      alert("Please enter something");
    } else {
      githubContext.searchRepos(text);
    }
  };

  return (
    <HStack spacing={2}>
      <Input placeholder='Search Bar' value={text} onChange={onChange} mr={3} />
      <Button
        onClick={onSubmit}
        leftIcon={<AiOutlineSearch />}
        colorScheme='teal'
        size='sm'
      >
        Search
      </Button>
      <Filters text={text} />
    </HStack>
  );
};

const TopBar = () => {
  return (
    <Center>
      <Box maxWidth='8x1' margin='auto' p={5}>
        <HStack>
          <SearchBar />
          <ColorModeSwitcher />
        </HStack>
      </Box>
    </Center>
  );
};

export default TopBar;
