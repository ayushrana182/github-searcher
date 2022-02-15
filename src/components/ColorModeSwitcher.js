
import {
    useColorMode,
    useColorModeValue,
    IconButton,
  } from "@chakra-ui/react"
  import { FaMoon, FaSun } from "react-icons/fa"
  

  export const ColorModeSwitcher = (props) => {
    const { toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  
    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    )
  }