import { Box, Center, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'


const SearchBar = () => {
    return(
        <Input placeholder='Search Bar' variant="filled"/>
    )
}

const TopBar = () => {
  return (

    <Center>
    <Box maxWidth='8x1' margin='auto' p={5}>

        <HStack spacing={8}>
        <SearchBar/>
        <ColorModeSwitcher/>
        </HStack>
    </Box>
    </Center>
  )
}

export default TopBar