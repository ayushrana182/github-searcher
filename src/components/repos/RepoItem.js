import React from "react";
import PropTypes from "prop-types";
import { Box, Image } from "@chakra-ui/react";
import { AiFillEye, AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";

const RepoItem = ({
  repo: {
    name,
    description,
    watchers,
    stargazers_count,
    forks,
    updated_at,
    owner: { login, avatar_url },
  },
}) => {
  return (
    <>
      <Box
        maxW='sm'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        minW='1x1'
        m='2'
      >
        <Image fit src={avatar_url} alt={login} />

        <Box p='6'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='capitalize'
            display='flex'
          >
            <AiOutlineStar
              style={{ marginTop: 4, marginRight: 1 }}
              color='teal'
            />{" "}
            {stargazers_count} stars &bull;{" "}
            <AiOutlineFork
              style={{ marginTop: 4, marginRight: 1 }}
              color='teal'
            />{" "}
            {forks} forks
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            textTransform='uppercase'
            display='flex'
          >
            Project: {name}
          </Box>
          <Box>{description}</Box>
          <Box
            display='flex'
            mt='2'
            color='gray.500'
            mb='2'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='capitalize'
            alignItems='flex-start'
          >
            <AiFillEye style={{ marginTop: 4, marginRight: 1 }} color='teal' />{" "}
            {watchers} watchers &bull;{" "}
            <MdOutlineUpdate
              style={{ marginTop: 4, marginRight: 4, marginLeft: 4 }}
              color='teal'
            />{" "}
            last updated {updated_at}
          </Box>
          <Link to={`repos/${login}/${name}`}>View More</Link>
        </Box>
      </Box>
    </>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
