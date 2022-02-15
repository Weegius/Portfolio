import React from "react";
import { Stack, Text, Flex, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex>
      <Box fontSize={40} pt={500} fontFamily=" Tauri, sans-serif;" >
        <Text>Front End</Text>
        <Text pl={50}>Web Developer</Text>
      </Box>

      <Stack
        fontSize={50}
        fontFamily=" Tauri, sans-serif;"
        spacing={-13}
        pt={200}
      >
        <Text>Christian</Text>
        <Text pl={50}>Thompson</Text>
      </Stack>
    </Flex>
  );
};
export default Home;
