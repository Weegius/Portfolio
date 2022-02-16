import React from "react";
import { Stack, Text, Flex, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex>
      <Box
        fontSize={40}
        fontFamily=" Tauri, sans-serif;"
        position={"absolute"}
        top={450}
        left={650}
      >
        <Text>Front End</Text>
        <Text>Web Developer</Text>
      </Box>

      <Stack
        fontSize={50}
        fontFamily=" Tauri, sans-serif;"
        spacing={-5}
        position={"absolute"}
        top={200}
        left={520}
      >
        <Text>Christian</Text>
        <Text pl={20}>Thompson</Text>
      </Stack>

      <Image
        display={["none", "none", "none", "flex"]}
        src={process.env.PUBLIC_URL + "/images/Portfo.png"}
        alt={"Pictureofme"}
        w={550}
        h={550}
        position={"absolute"}
        top={20}
        left={40}
      />
    </Flex>
  );
};
export default Home;
