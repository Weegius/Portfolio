import {Text, Stack} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  
  return (
    <Stack pr={5} alignSelf='center' textAlign={'right'} fontSize={25} fontFamily=' Tauri, sans-serif;' >
      <Text _hover={{cursor: 'pointer'}}>About</Text>
      <Text _hover={{cursor: 'pointer'}}>Connect</Text>
      <Text _hover={{cursor: 'pointer'}}>Project</Text>
    </Stack>
  )
}

export default Navbar;