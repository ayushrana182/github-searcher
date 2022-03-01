import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import GithubContext from "../../context/githubContext";
import { useParams, Link as LinkRRD } from "react-router-dom";
import { AiOutlineFork, AiOutlineLink } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import MarkdownView from "./MarkdownView";

const Repo = () => {
  const githubContext = useContext(GithubContext);
  const { getRepo, repo } = githubContext;
  const { isOpen, onOpen, onClose } = useDisclosure();

  let params = useParams();
  useEffect(() => {
    getRepo(params.login, params.name);
    // eslint-disable-next-line
  }, [params.name]);
  console.log(repo);

  return (
    <>
      {Boolean(repo) && (
        <Flex direction='column' align='center' maxW={{ xl: "1200px" }}>
          <LinkRRD to='/'>Go Back</LinkRRD>
          <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            m='2'
          >
            <Box p='6'>
              <Box
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='capitalize'
                display='flex'
              >
                Owner:
                <Link href={repo.owner.html_url} isExternal sx={{ mr: 3 }}>
                  {repo.owner.login} &rarr;
                </Link>
                Project:
                <Link href={repo.clone_url} isExternal sx={{ mr: 3 }}>
                  {repo.name}
                </Link>
              </Box>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='capitalize'
                display='flex'
                justifyContent='center'
              >
                <AiOutlineFork
                  color='teal'
                  style={{ marginTop: 4, marginRight: 1 }}
                />
                {repo.default_branch}
                &bull;
                <GoIssueOpened
                  color='teal'
                  style={{ marginTop: 4, marginRight: 2 }}
                />
                {repo.open_issues}
              </Box>
            </Box>
          </Box>

          <Button onClick={onOpen}>View Readme</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Readme</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <MarkdownView />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      )}
    </>
  );
};

export default Repo;
